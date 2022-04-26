import dayjs from 'dayjs'
import { FORMATTER_DATE, FORMATTER_DATETIME } from '@/constants/date'
// 日期 时间 相关工具类
export class UtilsDate {
  // 根据日期 计算该日的时间范围
  static buildArrayByDay(date: Date): Date[] {
    return [dayjs(date).startOf('day').toDate(), dayjs(date).endOf('day').toDate()]
  }
  static buildStrArrayByDay(date: Date, str: string): string[] {
    return [dayjs(date).startOf('day').format(str === 'day' ? FORMATTER_DATE : FORMATTER_DATETIME), dayjs(date).endOf('day').format(str === 'day' ? FORMATTER_DATE : FORMATTER_DATETIME)]
  }
}
