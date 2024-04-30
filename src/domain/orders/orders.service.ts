import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'common/dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'common/utils/common.constants';
import { OrderItemDto } from './dto/order-item.dto';
import { Product } from 'products/entities/product.entity';
import { OrderItem } from './entities/order-item.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,

    @InjectRepository(OrderItem)
    private readonly orderItemsRepository: Repository<OrderItem>,

    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { items } = createOrderDto;
    const itemsWithPrice = await Promise.all(
      items.map((item) => this.createOrderItemWithPrice(item)),
    );
    const order = this.ordersRepository.create({
      ...createOrderDto,
      items: itemsWithPrice,
    });
    return this.ordersRepository.save(order);
  }

  async findAll(paginationDto: PaginationDto): Promise<Order[]> {
    const { limit, offset } = paginationDto;
    return this.ordersRepository.find({
      skip: offset,
      take: limit ?? DEFAULT_PAGE_SIZE.ORDER,
    });
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.ordersRepository.findOne({
      where: { id },
      relations: {
        customer: true,
        payment: true,
        items: {
          product: true,
        },
      },
    });
    if (!order) {
      throw new NotFoundException('order not found');
    }
    return order;
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    return this.ordersRepository.remove(order);
  }

  private async createOrderItemWithPrice(
    orderItemDto: OrderItemDto,
  ): Promise<OrderItem> {
    const { id } = orderItemDto.product;

    const product = await this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException('Product Not Found');
    }

    const { price } = product;
    const orderItem = this.orderItemsRepository.create({
      ...orderItemDto,
      price,
    });

    return orderItem;
  }
}
