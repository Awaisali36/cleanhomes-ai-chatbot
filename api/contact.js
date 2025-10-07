import { randomUUID } from 'crypto';

// In-memory storage for demo (use a database in production)
const messages = new Map();

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
      const messageData = req.body;
      
      // Basic validation
      if (!messageData.name || !messageData.email || !messageData.message) {
        return res.status(400).json({ 
          success: false, 
          error: 'Missing required fields' 
        });
      }

      const message = {
        ...messageData,
        id: randomUUID(),
        createdAt: new Date().toISOString(),
      };

      messages.set(message.id, message);

      return res.status(200).json({ 
        success: true, 
        message 
      });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        error: 'Internal server error' 
      });
    }
  }

  if (req.method === 'GET') {
    const allMessages = Array.from(messages.values());
    return res.status(200).json({ 
      success: true, 
      messages: allMessages 
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}