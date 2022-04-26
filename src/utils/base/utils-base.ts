/**
 * 基础工具类
 */
export class UtilsBase {
  static StringIsEmpty(str: string | null | undefined): boolean {
    return str == null || str === ''
  }
  static StringNotEmpty(str: string | null | undefined): boolean {
    return str != null && str !== ''
  }
}
