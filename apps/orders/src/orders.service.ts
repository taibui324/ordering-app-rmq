import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/order-request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
 constructor(private readonly ordersRepository: OrdersRepository){}

 async createOrder(request: CreateOrderRequest){
   return this.ordersRepository.create(request);
 }
}
