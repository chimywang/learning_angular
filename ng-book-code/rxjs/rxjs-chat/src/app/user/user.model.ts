import { uuid } from '../util/uuid';

/**
 * stores information about a chat participant
 * A User represents an agent that sends messages
 */
export class User {
  id: string; // 用户ID ，通过uuid算法自动生成

  constructor(
              public name: string,  // 用户姓名
              public avatarSrc: string // 用户头像
  ) {
    this.id = uuid();
  }
}
