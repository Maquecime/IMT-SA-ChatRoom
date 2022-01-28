using System.Threading.Tasks;
using api.Models;
using Chatty.Api.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;

namespace Chatty.Api.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        public async Task SendMessage(ChatMessage message){
            await Clients.All.ReceiveMessage(message);
        }
    }
}