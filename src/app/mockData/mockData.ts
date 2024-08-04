import dayjs from "dayjs";

export interface Data {
  name: string;
  address: string;
  dayOpen: string[];
  operatingHours: string[];
  phoneNumber: string;
  website: string;
  reservationRequired: boolean;
  cuisineType: string[];
  overallRating: number;
  menuLink: string;
  priceRange: string;
  dateAdded: dayjs.Dayjs;
  region: string;
}

interface Review {
  rating: string;
  description: string;
  dateReview: string;
}

export const dataList: Data[] = [
  {
    name: "Tagfeed",
    address: "16th Floor",
    operatingHours: [],
    phoneNumber: "856-943-6316",
    website:
      "https://myspace.com/suspendisse/accumsan/tortor/quis.js?tempor=molestie&turpis=hendrerit&nec=at&euismod=vulputate&scelerisque=vitae&quam=nisl&turpis=aenean&adipiscing=lectus&lorem=pellentesque",
    reservationRequired: false,
    cuisineType: ["American", "Western", "Halal", "Vegetarian"],
    overallRating: 2.4,
    priceRange: "$$$$",
    menuLink:
      "https://vimeo.com/blandit/mi/in/porttitor/pede.jpg?curae=pellentesque&duis=quisque&faucibus=porta&accumsan=volutpat&odio=erat&curabitur=quisque&convallis=erat&duis=eros&consequat=viverra&dui=eget&nec=congue&nisi=eget&volutpat=semper&eleifend=rutrum&donec=nulla&ut=nunc&dolor=purus&morbi=phasellus&vel=in&lectus=felis&in=donec&quam=semper&fringilla=sapien&rhoncus=a&mauris=libero&enim=nam&leo=dui&rhoncus=proin&sed=leo&vestibulum=odio&sit=porttitor&amet=id&cursus=consequat&id=in&turpis=consequat&integer=ut&aliquet=nulla&massa=sed&id=accumsan&lobortis=felis&convallis=ut&tortor=at&risus=dolor&dapibus=quis&augue=odio&vel=consequat&accumsan=varius&tellus=integer&nisi=ac&eu=leo&orci=pellentesque&mauris=ultrices&lacinia=mattis&sapien=odio&quis=donec&libero=vitae&nullam=nisi&sit=nam&amet=ultrices&turpis=libero&elementum=non&ligula=mattis&vehicula=pulvinar&consequat=nulla&morbi=pede&a=ullamcorper&ipsum=augue&integer=a&a=suscipit&nibh=nulla&in=elit&quis=ac&justo=nulla&maecenas=sed&rhoncus=vel&aliquam=enim&lacus=sit&morbi=amet&quis=nunc&tortor=viverra&id=dapibus&nulla=nulla&ultrices=suscipit&aliquet=ligula&maecenas=in&leo=lacus&odio=curabitur&condimentum=at&id=ipsum&luctus=ac&nec=tellus&molestie=semper&sed=interdum&justo=mauris&pellentesque=ullamcorper&viverra=purus&pede=sit",
    region: "Central",
    dateAdded: dayjs().subtract(2, "year"),
    dayOpen: [],
  },
  {
    name: "Aibox",
    address: "Room 473",
    operatingHours: [],
    phoneNumber: "889-374-5135",
    website:
      "https://epa.gov/convallis/nunc/proin.aspx?nec=nibh&sem=ligula&duis=nec&aliquam=sem&convallis=duis&nunc=aliquam&proin=convallis&at=nunc&turpis=proin&a=at&pede=turpis&posuere=a&nonummy=pede&integer=posuere&non=nonummy&velit=integer&donec=non&diam=velit&neque=donec&vestibulum=diam&eget=neque&vulputate=vestibulum&ut=eget&ultrices=vulputate",
    reservationRequired: false,
    cuisineType: ["Mexican"],
    overallRating: 3.1,
    priceRange: "$$",
    menuLink:
      "https://marketwatch.com/orci/mauris/lacinia/sapien/quis/libero.html?primis=penatibus&in=et&faucibus=magnis&orci=dis&luctus=parturient&et=montes&ultrices=nascetur&posuere=ridiculus&cubilia=mus&curae=vivamus&nulla=vestibulum&dapibus=sagittis&dolor=sapien&vel=cum&est=sociis&donec=natoque&odio=penatibus&justo=et&sollicitudin=magnis&ut=dis&suscipit=parturient&a=montes&feugiat=nascetur&et=ridiculus&eros=mus&vestibulum=etiam&ac=vel&est=augue&lacinia=vestibulum",
    region: "Central",
    dateAdded: dayjs().subtract(2, "day"),
    dayOpen: [],
  },
  {
    name: "Shufflester",
    address: "Suite 71",
    operatingHours: [],
    phoneNumber: "309-632-5817",
    website:
      "http://latimes.com/mus/vivamus.aspx?habitasse=ligula&platea=sit&dictumst=amet&aliquam=eleifend&augue=pede&quam=libero&sollicitudin=quis&vitae=orci&consectetuer=nullam&eget=molestie&rutrum=nibh",
    reservationRequired: true,
    cuisineType: ["American"],
    overallRating: 1.4,
    priceRange: "$$$",
    menuLink:
      "http://stumbleupon.com/blandit/nam/nulla/integer.png?in=mauris&ante=morbi&vestibulum=non&ante=lectus&ipsum=aliquam&primis=sit&in=amet&faucibus=diam&orci=in&luctus=magna&et=bibendum&ultrices=imperdiet&posuere=nullam&cubilia=orci",
    region: "Central",
    dateAdded: dayjs().subtract(2, "month"),
    dayOpen: [],
  },
  {
    name: "Lazz",
    address: "Apt 1842",
    operatingHours: [],
    phoneNumber: "822-331-0653",
    website:
      "http://mapy.cz/felis/donec/semper/sapien/a.png?tellus=in&nisi=congue&eu=etiam&orci=justo&mauris=etiam&lacinia=pretium&sapien=iaculis&quis=justo&libero=in&nullam=hac&sit=habitasse&amet=platea&turpis=dictumst&elementum=etiam&ligula=faucibus&vehicula=cursus&consequat=urna&morbi=ut&a=tellus&ipsum=nulla&integer=ut&a=erat&nibh=id&in=mauris&quis=vulputate&justo=elementum&maecenas=nullam&rhoncus=varius&aliquam=nulla&lacus=facilisi&morbi=cras&quis=non&tortor=velit&id=nec&nulla=nisi&ultrices=vulputate&aliquet=nonummy&maecenas=maecenas&leo=tincidunt&odio=lacus&condimentum=at&id=velit&luctus=vivamus&nec=vel&molestie=nulla&sed=eget&justo=eros&pellentesque=elementum&viverra=pellentesque&pede=quisque&ac=porta&diam=volutpat&cras=erat&pellentesque=quisque&volutpat=erat&dui=eros&maecenas=viverra&tristique=eget&est=congue&et=eget&tempus=semper&semper=rutrum&est=nulla&quam=nunc&pharetra=purus&magna=phasellus&ac=in&consequat=felis&metus=donec&sapien=semper&ut=sapien&nunc=a&vestibulum=libero&ante=nam&ipsum=dui&primis=proin&in=leo&faucibus=odio",
    reservationRequired: true,
    cuisineType: ["Chinese"],
    overallRating: 1.0,
    priceRange: "$$$$",
    menuLink:
      "http://epa.gov/a/libero/nam/dui.js?quam=non&fringilla=velit&rhoncus=nec&mauris=nisi&enim=vulputate&leo=nonummy&rhoncus=maecenas&sed=tincidunt&vestibulum=lacus&sit=at&amet=velit&cursus=vivamus&id=vel&turpis=nulla&integer=eget&aliquet=eros&massa=elementum&id=pellentesque&lobortis=quisque&convallis=porta&tortor=volutpat&risus=erat&dapibus=quisque&augue=erat&vel=eros&accumsan=viverra&tellus=eget&nisi=congue&eu=eget&orci=semper&mauris=rutrum",
    region: "West",
    dateAdded: dayjs().subtract(1, "day"),
    dayOpen: [],
  },
  {
    name: "Rhyloo",
    address: "Apt 1344",
    operatingHours: [],
    phoneNumber: "521-346-7259",
    website:
      "https://histats.com/nibh/ligula/nec/sem.aspx?blandit=tellus&lacinia=nulla&erat=ut&vestibulum=erat&sed=id&magna=mauris&at=vulputate&nunc=elementum&commodo=nullam&placerat=varius&praesent=nulla&blandit=facilisi&nam=cras&nulla=non&integer=velit&pede=nec&justo=nisi&lacinia=vulputate&eget=nonummy&tincidunt=maecenas&eget=tincidunt&tempus=lacus&vel=at&pede=velit&morbi=vivamus&porttitor=vel&lorem=nulla&id=eget&ligula=eros&suspendisse=elementum&ornare=pellentesque&consequat=quisque&lectus=porta&in=volutpat&est=erat&risus=quisque&auctor=erat&sed=eros&tristique=viverra&in=eget&tempus=congue&sit=eget&amet=semper&sem=rutrum&fusce=nulla&consequat=nunc&nulla=purus&nisl=phasellus&nunc=in&nisl=felis&duis=donec&bibendum=semper&felis=sapien&sed=a&interdum=libero&venenatis=nam&turpis=dui&enim=proin&blandit=leo&mi=odio&in=porttitor&porttitor=id&pede=consequat&justo=in&eu=consequat&massa=ut&donec=nulla&dapibus=sed&duis=accumsan&at=felis&velit=ut&eu=at&est=dolor&congue=quis&elementum=odio&in=consequat&hac=varius&habitasse=integer&platea=ac&dictumst=leo&morbi=pellentesque&vestibulum=ultrices&velit=mattis&id=odio&pretium=donec&iaculis=vitae&diam=nisi&erat=nam&fermentum=ultrices&justo=libero&nec=non&condimentum=mattis&neque=pulvinar&sapien=nulla&placerat=pede",
    reservationRequired: false,
    cuisineType: ["Indian"],
    overallRating: 4.7,
    priceRange: "$$$$$",
    menuLink:
      "https://desdev.cn/penatibus/et/magnis/dis/parturient/montes.js?ac=ridiculus&diam=mus&cras=etiam&pellentesque=vel&volutpat=augue&dui=vestibulum&maecenas=rutrum&tristique=rutrum&est=neque&et=aenean&tempus=auctor&semper=gravida&est=sem&quam=praesent&pharetra=id&magna=massa&ac=id&consequat=nisl&metus=venenatis&sapien=lacinia&ut=aenean&nunc=sit&vestibulum=amet&ante=justo&ipsum=morbi&primis=ut&in=odio&faucibus=cras&orci=mi&luctus=pede&et=malesuada&ultrices=in&posuere=imperdiet&cubilia=et&curae=commodo&mauris=vulputate&viverra=justo&diam=in&vitae=blandit&quam=ultrices&suspendisse=enim&potenti=lorem&nullam=ipsum&porttitor=dolor&lacus=sit&at=amet&turpis=consectetuer&donec=adipiscing&posuere=elit&metus=proin&vitae=interdum&ipsum=mauris&aliquam=non&non=ligula&mauris=pellentesque&morbi=ultrices&non=phasellus&lectus=id&aliquam=sapien&sit=in&amet=sapien&diam=iaculis&in=congue&magna=vivamus&bibendum=metus&imperdiet=arcu&nullam=adipiscing",
    region: "North",
    dateAdded: dayjs().subtract(3, "hour"),
    dayOpen: [],
  },
  {
    name: "Flashpoint",
    address: "Room 153",
    operatingHours: [],
    phoneNumber: "623-491-5833",
    website:
      "https://pinterest.com/morbi/vel/lectus/in/quam.xml?volutpat=donec&sapien=quis&arcu=orci&sed=eget&augue=orci&aliquam=vehicula&erat=condimentum&volutpat=curabitur&in=in&congue=libero&etiam=ut&justo=massa&etiam=volutpat&pretium=convallis&iaculis=morbi&justo=odio&in=odio&hac=elementum&habitasse=eu&platea=interdum&dictumst=eu&etiam=tincidunt&faucibus=in&cursus=leo&urna=maecenas&ut=pulvinar&tellus=lobortis&nulla=est&ut=phasellus&erat=sit&id=amet&mauris=erat&vulputate=nulla&elementum=tempus&nullam=vivamus&varius=in&nulla=felis&facilisi=eu&cras=sapien&non=cursus&velit=vestibulum&nec=proin&nisi=eu&vulputate=mi&nonummy=nulla&maecenas=ac&tincidunt=enim&lacus=in&at=tempor&velit=turpis&vivamus=nec&vel=euismod&nulla=scelerisque&eget=quam&eros=turpis&elementum=adipiscing&pellentesque=lorem&quisque=vitae&porta=mattis&volutpat=nibh&erat=ligula&quisque=nec&erat=sem&eros=duis&viverra=aliquam&eget=convallis&congue=nunc&eget=proin&semper=at&rutrum=turpis&nulla=a&nunc=pede&purus=posuere&phasellus=nonummy&in=integer&felis=non&donec=velit&semper=donec&sapien=diam&a=neque&libero=vestibulum&nam=eget&dui=vulputate&proin=ut&leo=ultrices",
    reservationRequired: true,
    cuisineType: ["Chinese"],
    overallRating: 4.1,
    priceRange: "$",
    menuLink:
      "http://deviantart.com/pede.js?amet=libero&sem=ut&fusce=massa&consequat=volutpat&nulla=convallis&nisl=morbi&nunc=odio&nisl=odio&duis=elementum&bibendum=eu&felis=interdum&sed=eu&interdum=tincidunt&venenatis=in&turpis=leo&enim=maecenas&blandit=pulvinar&mi=lobortis&in=est&porttitor=phasellus&pede=sit&justo=amet&eu=erat&massa=nulla&donec=tempus&dapibus=vivamus&duis=in&at=felis&velit=eu&eu=sapien&est=cursus&congue=vestibulum&elementum=proin&in=eu&hac=mi&habitasse=nulla&platea=ac&dictumst=enim&morbi=in&vestibulum=tempor&velit=turpis&id=nec&pretium=euismod&iaculis=scelerisque&diam=quam&erat=turpis&fermentum=adipiscing&justo=lorem&nec=vitae&condimentum=mattis&neque=nibh&sapien=ligula&placerat=nec&ante=sem&nulla=duis&justo=aliquam&aliquam=convallis&quis=nunc&turpis=proin&eget=at&elit=turpis&sodales=a&scelerisque=pede&mauris=posuere&sit=nonummy&amet=integer&eros=non&suspendisse=velit&accumsan=donec&tortor=diam&quis=neque&turpis=vestibulum&sed=eget&ante=vulputate&vivamus=ut&tortor=ultrices&duis=vel&mattis=augue&egestas=vestibulum&metus=ante&aenean=ipsum&fermentum=primis&donec=in&ut=faucibus&mauris=orci&eget=luctus&massa=et&tempor=ultrices&convallis=posuere&nulla=cubilia&neque=curae&libero=donec&convallis=pharetra",
    region: "East",
    dateAdded: dayjs().subtract(4, "minute"),
    dayOpen: [],
  },
  {
    name: "Skinte",
    address: "Room 1600",
    operatingHours: [],
    phoneNumber: "820-595-3528",
    website:
      "http://eventbrite.com/orci/mauris/lacinia/sapien/quis/libero.xml?nascetur=in&ridiculus=porttitor&mus=pede&etiam=justo&vel=eu",
    reservationRequired: true,
    cuisineType: ["American"],
    overallRating: 1.9,
    priceRange: "$",
    menuLink:
      "http://bloglovin.com/velit/donec/diam/neque/vestibulum.aspx?in=vestibulum&faucibus=ante&orci=ipsum&luctus=primis&et=in&ultrices=faucibus&posuere=orci&cubilia=luctus&curae=et&mauris=ultrices&viverra=posuere&diam=cubilia&vitae=curae&quam=nulla&suspendisse=dapibus&potenti=dolor&nullam=vel&porttitor=est",
    region: "East",
    dateAdded: dayjs().subtract(5, "day"),
    dayOpen: [],
  },
  {
    name: "Zoonder",
    address: "PO Box 19714",
    operatingHours: [],
    phoneNumber: "124-665-0435",
    website:
      "http://squidoo.com/ultrices/posuere.json?malesuada=sapien&in=varius&imperdiet=ut&et=blandit&commodo=non&vulputate=interdum&justo=in&in=ante&blandit=vestibulum&ultrices=ante&enim=ipsum&lorem=primis&ipsum=in&dolor=faucibus&sit=orci&amet=luctus&consectetuer=et&adipiscing=ultrices&elit=posuere",
    reservationRequired: false,
    cuisineType: ["American"],
    overallRating: 2.4,
    priceRange: "$",
    menuLink:
      "https://europa.eu/faucibus/accumsan/odio/curabitur/convallis/duis/consequat.xml?ipsum=leo&primis=pellentesque&in=ultrices&faucibus=mattis&orci=odio&luctus=donec&et=vitae&ultrices=nisi&posuere=nam&cubilia=ultrices&curae=libero&nulla=non&dapibus=mattis&dolor=pulvinar&vel=nulla&est=pede&donec=ullamcorper&odio=augue&justo=a&sollicitudin=suscipit",
    region: "North-East",
    dateAdded: dayjs().subtract(6, "month"),
    dayOpen: [],
  },
  {
    name: "Voomm",
    address: "Room 851",
    operatingHours: [],
    phoneNumber: "453-197-4795",
    website:
      "https://theguardian.com/eu/mi/nulla/ac/enim/in/tempor.js?aliquet=nullam&at=orci&feugiat=pede&non=venenatis&pretium=non&quis=sodales&lectus=sed&suspendisse=tincidunt&potenti=eu&in=felis&eleifend=fusce&quam=posuere&a=felis&odio=sed&in=lacus&hac=morbi&habitasse=sem&platea=mauris&dictumst=laoreet&maecenas=ut&ut=rhoncus&massa=aliquet&quis=pulvinar&augue=sed&luctus=nisl&tincidunt=nunc&nulla=rhoncus&mollis=dui&molestie=vel&lorem=sem&quisque=sed&ut=sagittis&erat=nam&curabitur=congue&gravida=risus&nisi=semper&at=porta&nibh=volutpat&in=quam&hac=pede&habitasse=lobortis&platea=ligula&dictumst=sit&aliquam=amet&augue=eleifend&quam=pede&sollicitudin=libero&vitae=quis&consectetuer=orci&eget=nullam&rutrum=molestie&at=nibh&lorem=in&integer=lectus&tincidunt=pellentesque&ante=at&vel=nulla&ipsum=suspendisse&praesent=potenti&blandit=cras&lacinia=in&erat=purus&vestibulum=eu&sed=magna&magna=vulputate&at=luctus&nunc=cum&commodo=sociis&placerat=natoque&praesent=penatibus&blandit=et&nam=magnis&nulla=dis&integer=parturient&pede=montes&justo=nascetur&lacinia=ridiculus&eget=mus&tincidunt=vivamus&eget=vestibulum&tempus=sagittis&vel=sapien&pede=cum&morbi=sociis&porttitor=natoque&lorem=penatibus&id=et&ligula=magnis&suspendisse=dis&ornare=parturient&consequat=montes&lectus=nascetur&in=ridiculus&est=mus&risus=etiam&auctor=vel&sed=augue&tristique=vestibulum&in=rutrum",
    reservationRequired: true,
    cuisineType: ["Italian"],
    overallRating: 2.5,
    priceRange: "$",
    menuLink:
      "https://networkadvertising.org/eu/interdum/eu/tincidunt/in.aspx?tincidunt=quisque&in=id&leo=justo&maecenas=sit&pulvinar=amet&lobortis=sapien&est=dignissim&phasellus=vestibulum&sit=vestibulum&amet=ante&erat=ipsum&nulla=primis&tempus=in&vivamus=faucibus&in=orci&felis=luctus&eu=et&sapien=ultrices&cursus=posuere&vestibulum=cubilia&proin=curae&eu=nulla&mi=dapibus&nulla=dolor&ac=vel&enim=est&in=donec&tempor=odio&turpis=justo&nec=sollicitudin&euismod=ut&scelerisque=suscipit&quam=a&turpis=feugiat&adipiscing=et&lorem=eros&vitae=vestibulum&mattis=ac&nibh=est&ligula=lacinia&nec=nisi&sem=venenatis&duis=tristique",
    region: "West",
    dateAdded: dayjs().subtract(7, "year"),
    dayOpen: [],
  },
  {
    name: "Oozz",
    address: "Suite 52",
    operatingHours: [],
    phoneNumber: "531-746-8602",
    website:
      "https://storify.com/quisque/ut/erat/curabitur/gravida/nisi.jsp?donec=consectetuer&posuere=eget",
    reservationRequired: true,
    cuisineType: ["Chinese"],
    overallRating: 4.7,
    priceRange: "$",
    menuLink:
      "http://jiathis.com/pharetra/magna.js?consectetuer=mauris&adipiscing=non&elit=ligula&proin=pellentesque&interdum=ultrices&mauris=phasellus&non=id&ligula=sapien&pellentesque=in&ultrices=sapien&phasellus=iaculis&id=congue&sapien=vivamus&in=metus&sapien=arcu&iaculis=adipiscing&congue=molestie&vivamus=hendrerit&metus=at&arcu=vulputate&adipiscing=vitae&molestie=nisl&hendrerit=aenean&at=lectus&vulputate=pellentesque&vitae=eget&nisl=nunc&aenean=donec&lectus=quis&pellentesque=orci&eget=eget&nunc=orci&donec=vehicula&quis=condimentum&orci=curabitur&eget=in&orci=libero&vehicula=ut&condimentum=massa&curabitur=volutpat&in=convallis&libero=morbi&ut=odio&massa=odio&volutpat=elementum&convallis=eu&morbi=interdum&odio=eu&odio=tincidunt&elementum=in&eu=leo&interdum=maecenas&eu=pulvinar&tincidunt=lobortis&in=est&leo=phasellus&maecenas=sit&pulvinar=amet&lobortis=erat&est=nulla&phasellus=tempus&sit=vivamus&amet=in&erat=felis&nulla=eu&tempus=sapien&vivamus=cursus&in=vestibulum&felis=proin&eu=eu&sapien=mi&cursus=nulla&vestibulum=ac&proin=enim&eu=in&mi=tempor&nulla=turpis&ac=nec&enim=euismod&in=scelerisque&tempor=quam&turpis=turpis&nec=adipiscing&euismod=lorem&scelerisque=vitae",
    region: "North",
    dateAdded: dayjs().subtract(10, "day"),
    dayOpen: [],
  },
];
