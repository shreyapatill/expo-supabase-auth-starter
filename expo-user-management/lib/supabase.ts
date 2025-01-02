import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { TextEncoder, TextDecoder as NodeTextDecoder } from 'util';

// Apply polyfills for TextEncoder and TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder as any;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = NodeTextDecoder as unknown as {
    new (label?: string, options?: TextDecoderOptions): TextDecoder;
    prototype: TextDecoder;
  };
}

const supabaseUrl = 'https://sjhoauhzwuxvvejtwcac.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqaG9hdWh6d3V4dnZlanR3Y2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2NzA3MzQsImV4cCI6MjA1MTI0NjczNH0.PCgo9zAWkaDMRpyxmXu1Pl3rcGArRZVlfwOHOsLU5iE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
