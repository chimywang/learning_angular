import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { uuid } from './../util/uuid';

/**
stores an individual message
 * Message represents one message being sent in a Thread
 */
 export class Message {
   id: string; // 消息id
   sentAt: Date; // 发送时间
   isRead: boolean; // read or not
   author: User; // the author
   text: string; // the content of message
   thread: Thread; // the thread of current message

   constructor(obj?: any) {
     this.id              = obj && obj.id              || uuid();
     this.isRead          = obj && obj.isRead          || false;
     this.sentAt          = obj && obj.sentAt          || new Date();
     this.author          = obj && obj.author          || null;
     this.text            = obj && obj.text            || null;
     this.thread          = obj && obj.thread          || null;
   }
 }
