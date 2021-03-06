import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateOrderRequest } from './dto/order-request';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() request: CreateOrderRequest) {
    return this.ordersService.createOrder(request);
  }
}
