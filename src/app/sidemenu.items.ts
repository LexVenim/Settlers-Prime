export const menuItems : any = [
    {
      auth: true,
      pages: [
        {page: "profile", icon: "../assets/imgs/menu-profile.png", name: "Profile"},
        {page: "chats", icon: "../assets/imgs/menu-chats.png", name: "Chats"},
        {page: "guild", icon: "../assets/imgs/menu-guild.png", name: "Guild"}
      ]
    },
    {
      pages: [
        {page: "adventures", icon: "../assets/imgs/menu-adventures.png", name: "Adventures"},
        {page: "battle", icon: "../assets/imgs/menu-battle.png", name: "Battle"},
        {page: "economy", icon: "../assets/imgs/menu-economy.png", name: "Economy", auth: true},
        {page: "sectors", icon: "../assets/imgs/menu-island.png", name: "Island", auth: true},
        {page: "timers", icon: "../assets/imgs/menu-notifications.png", name: "Notifications", auth: true},
        {page: "quests", icon: "../assets/imgs/menu-quests.png", name: "Quests"},
        {page: "specialists", icon: "../assets/imgs/menu-specialists.png", name: "Specialists", auth: true},
        {page: "trade", icon: "../assets/imgs/menu-trade.png", name: "Trade"}
      ]
    },
    {
      pages: [
        {page: "settings", icon: "../assets/imgs/menu-settings.png", name: "Settings"},
        {page: "signin", icon: "../assets/imgs/menu-auth.png", name: "Sign In", auth: false},
        {page: "signout", icon: "../assets/imgs/menu-auth.png", name: "Sign Out", auth: true, logout: true}
      ]
    }
];