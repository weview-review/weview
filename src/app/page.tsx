import prisma from '@/lib/prisma';

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <main>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
