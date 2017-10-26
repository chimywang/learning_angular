import { Message } from '../message/message.model';
import { uuid } from '../util/uuid';

/**
stores a collection of Messages as well as some data about the conversation
 * Thread represents a group of Users exchanging Messages
 */
 export class Thread {
   id: string; // 线程id
   lastMessage: Message; // 最后一条消息
   name: string;  // 线程名称
   avatarSrc: string; // 头像

   constructor(id?: string,
               name?: string,
               avatarSrc?: string) {
     this.id = id || uuid(); // id或者uuid生成新的
     this.name = name;
     this.avatarSrc = avatarSrc;
   }
 }
