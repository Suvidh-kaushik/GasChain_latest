
export default function formatDate(data: string): string{
    const date = new Date(data);
    
    const formatted = date.toLocaleDateString();
  
    return formatted;
}