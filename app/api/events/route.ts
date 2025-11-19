import { NextResponse } from 'next/server'
import { TicketAggregatorAPI } from '@/lib/api-client'
import { SearchFilters } from '@/lib/types'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    const filters: SearchFilters = {
      query: searchParams.get('query') || undefined,
      category: (searchParams.get('category') as any) || 'all',
      city: searchParams.get('city') || undefined,
      sortBy: (searchParams.get('sortBy') as any) || 'date',
    }

    const events = await TicketAggregatorAPI.searchEvents(filters)

    return NextResponse.json({
      success: true,
      data: events,
      count: events.length,
    })
  } catch (error) {
    console.error('[v0] Error fetching events:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}
