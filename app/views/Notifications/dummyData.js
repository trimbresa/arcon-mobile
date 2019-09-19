export default [
  {
    title: "Today",
    data: [
      {
        title: "liked your post",
        author: "Warren Cook",
        createdTime: "3m",
        type: "like",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        unread: true
      },
      {
        title: "requested a schedule for your approval",
        author: "John Doe",
        createdTime: "1h",
        type: "schedule",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        scheduleInfo: {
          startDate: "Sep 4, 19 7:15 AM",
          endDate: "Sep 4, 19 2:00 PM"
        },
        approved: false,
        unread: false
      },
      {
        title: "commented your post",
        author: "Shawn Bowen",
        createdTime: "2h",
        type: "comment",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        unread: false
      },
      {
        title: "approved your schedules",
        author: "Shawn Bowen",
        createdTime: "5h",
        type: "schedule",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        scheduleInfo: {
          startDate: "Sep 20, 19 7:15 AM",
          endDate: "Sep 25, 19 2:00 PM"
        },
        approved: true,
        unread: false
      }
    ],
  },
  {
    title: "Yesterday",
    data: [
      {
        title: "liked your post",
        author: "Warren Cook",
        createdTime: "Yesterday at 1am",
        type: "like",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        unread: false
      },
      {
        title: "commented your post",
        author: "Shawn Bowen",
        createdTime: "Yesterday at 6pm",
        type: "comment",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        unread: false
      },
      {
        title: "approved your schedules",
        author: "Shawn Bowen",
        createdTime: "Yesterday at 8pm",
        type: "schedule",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        scheduleInfo: {
          startDate: "Sep 20, 19 7:15 AM",
          endDate: "Sep 25, 19 2:00 PM"
        },
        approved: true,
        unread: false
      }
    ],
  },
  {
    title: "Older",
    data: [
      {
        title: "liked your post",
        author: "Warren Cook",
        createdTime: "A week ago",
        type: "like",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        unread: false
      },
      {
        title: "commented your post",
        author: "Shawn Bowen",
        createdTime: "Two weeks ago",
        type: "comment",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        unread: false
      },
      {
        title: "approved your schedules",
        author: "Shawn Bowen",
        createdTime: "A month ago",
        type: "schedule",
        media: {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
        },
        scheduleInfo: {
          startDate: "Sep 20, 19 7:15 AM",
          endDate: "Sep 25, 19 2:00 PM"
        },
        approved: true,
        unread: false
      }
    ],
  }
];