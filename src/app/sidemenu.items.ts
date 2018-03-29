export const menuItems : any = [
    {
      pages: [
        {page: "profile", icon: "../assets/icon/swords.png", name: "Profile"}
      ]
    },
    {
      header: "Social",
      pages: [
        {page: "chats", icon: "../assets/icon/swords.png", name: "Chats"},
        {page: "guild", icon: "../assets/icon/swords.png", name: "Guild"}
      ]
    },
    {
      header: "General",
      pages: [
        {page: "adventures", icon: "../assets/icon/ship.png", name: "Adventures"},
        {page: "battle", icon: "../assets/icon/swords.png", name: "Battle"},
        {page: "economy", icon: "../assets/icon/mill.png", name: "Economy", auth: true},
        {page: "sectors", icon: "../assets/icon/castle.png", name: "Island", auth: true},
        {page: "quests", icon: "../assets/icon/scroll.png", name: "Quests"},
        {page: "specialists", icon: "../assets/icon/scroll.png", name: "Specialists", auth: true},
        {page: "timers", icon: "../assets/icon/timer.png", name: "Timers", auth: true},
        {page: "trade", icon: "../assets/icon/coins.png", name: "Trade"}
      ]
    },
    {
      pages: [
        {page: "settings", icon: "../assets/icon/swords.png", name: "Settings"},
        {page: "signin", icon: "../assets/icon/group.png", name: "Sign In", auth: false},
        {page: "signout", icon: "../assets/icon/shield-1.png", name: "Sign Out", auth: true, logout: true}
      ]
    }
];