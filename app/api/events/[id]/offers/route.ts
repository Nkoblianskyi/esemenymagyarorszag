import { NextResponse } from 'next/server'
import { TicketAggregatorAPI } from '@/lib/api-client'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const eventId = parseInt(params.id)
    const priceComparison = await TicketAggregatorAPI.getPriceComparison(eventId)

    if (!priceComparison) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: priceComparison,
    })
  } catch (error) {
    console.error('[v0] Error fetching offers:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch offers' },
      { status: 500 }
    )
  }
}
