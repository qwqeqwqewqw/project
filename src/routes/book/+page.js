export async function load({ url }) {
  const roomId = url.searchParams.get('room');
  const roomType = url.searchParams.get('type');
  
  return {
    roomId,
    roomType
  };
}