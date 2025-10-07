import { randomUUID } from 'crypto';

// In-memory storage for demo (use a database in production)
const bookings = new Map();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const bookingData = req.body;
      
      // Basic validation
      if (!bookingData.serviceType || !bookingData.fullName || !bookingData.email) {
        return res.status(400).json({ 
          success: false, 
          error: 'Missing required fields' 
        });
      }

      const booking = {
        ...bookingData,
        id: randomUUID(),
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      bookings.set(booking.id, booking);

      return res.status(200).json({ 
        success: true, 
        booking 
      });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        error: 'Internal server error' 
      });
    }
  }

  if (req.method === 'GET') {
    const allBookings = Array.from(bookings.values());
    return res.status(200).json({ 
      success: true, 
      bookings: allBookings 
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}