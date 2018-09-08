import { createHmac, Hmac } from 'crypto';

export default class Encryption {
  private static instance: Encryption;
  private hmac: Hmac = createHmac('sha512', process.env.HASH_SECRET);

  private constructor() {}

  public static get Instance(): Encryption {
    return Encryption.instance || new Encryption();
  }

  public encrypt(text: string): string {
    return this.hmac.update(text).digest('base64');
  }
}
