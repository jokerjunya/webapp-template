import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSSクラスをマージするためのユーティリティ関数
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 文字列をキャメルケースに変換
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

/**
 * 文字列をケバブケースに変換
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * URLパラメータから値を安全に取得
 */
export function getSearchParam(
  searchParams: URLSearchParams,
  key: string,
  defaultValue: string = '',
): string {
  return searchParams.get(key) ?? defaultValue;
}

/**
 * 文字列を指定された長さに切り詰める
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * 相対時間を表示（例: 2分前、3時間前）
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  
  if (diff < minute) {
    return 'たった今';
  } else if (diff < hour) {
    return `${Math.floor(diff / minute)}分前`;
  } else if (diff < day) {
    return `${Math.floor(diff / hour)}時間前`;
  } else if (diff < week) {
    return `${Math.floor(diff / day)}日前`;
  } else if (diff < month) {
    return `${Math.floor(diff / week)}週間前`;
  } else if (diff < year) {
    return `${Math.floor(diff / month)}ヶ月前`;
  } else {
    return `${Math.floor(diff / year)}年前`;
  }
}

/**
 * バイト数を人間が読みやすい形式に変換
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * ランダムなIDを生成
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * オブジェクトの深いクローンを作成
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map((item) => deepClone(item)) as unknown as T;
  if (typeof obj === 'object') {
    const copy = {} as { [K in keyof T]: T[K] };
    Object.keys(obj).forEach((key) => {
      copy[key as keyof T] = deepClone((obj as { [key: string]: any })[key]);
    });
    return copy;
  }
  return obj;
}

/**
 * デバウンス関数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * スロットル関数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
