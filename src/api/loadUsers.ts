import type { User } from '@/types/types';

export async function loadUsers(): Promise<User[]> {
  const res = await fetch('/data/users.json');

  if (!res.ok) throw new Error('Failed to load users.json');

  return await res.json();
}
