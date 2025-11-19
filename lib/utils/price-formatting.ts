/**
 * Utility functions for price formatting and calculations
 */

export function formatPrice(price: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency,
  }).format(price)
}

export function calculatePriceAboveFace(price: number, faceValue: number): number {
  return price - faceValue
}

export function calculatePricePercentageAboveFace(price: number, faceValue: number): number {
  return ((price - faceValue) / faceValue) * 100
}

export function formatPriceComparison(price: number, faceValue: number): string {
  const diff = calculatePriceAboveFace(price, faceValue)
  if (diff > 0) {
    return `+€${diff.toFixed(2)} sobre valor nominal`
  } else if (diff < 0) {
    return `-€${Math.abs(diff).toFixed(2)} bajo valor nominal`
  }
  return 'Precio nominal'
}
