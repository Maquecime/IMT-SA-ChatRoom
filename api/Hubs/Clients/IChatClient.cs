using System.Threading.Tasks;
using api.Models;

namespace Chatty.Api.Hubs.Clients
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}