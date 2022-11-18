const TIME = {
  ONE_SECOND: 1000,
  ONE_MINUTE: 60 * 1000,
  ONE_HOUR  : 60 * 60 * 1000,
};

const StorageKey = {
  accessToken: '@auth:accessToken',
};

const ValidApiStatus = [200, 201, 202, 203, 204];

const sizeList = [
  {
    key  : 'freesize',
    value: 'freesize',
  },
  {
    key  : 'XS',
    value: 'XS',
  },
  {
    key  : 'S',
    value: 'S',
  },
  {
    key  : 'M',
    value: 'M',
  },
  {
    key  : 'L',
    value: 'L',
  },
  {
    key  : 'XL',
    value: 'XL',
  },
];

const colorList = [
  {
    key  : 'beige',
    value: '#F5F5DC',
  },
  {
    key  : 'blue',
    value: '#0000FF',
  },
  {
    key  : 'black',
    value: '#000000',
  },
  {
    key  : 'brown',
    value: '#A52A2A',
  },
  {
    key  : 'green',
    value: '#008000',
  },
  {
    key  : 'red',
    value: '#FF0000',
  },
  {
    key  : 'metallic',
    value: '#999999',
  },
  {
    key  : 'white',
    value: '#FFFFFF',
  },
  {
    key  : 'cream',
    value: '#FCE5CD',
  },
  {
    key  : 'pink',
    value: '#FFC0CB',
  },
  {
    key  : 'orange',
    value: '#FFA500',
  },
  {
    key  : 'yellow',
    value: '#FFFF00',
  },
  {
    key  : 'lilac',
    value: '#C8A2C8',
  },
  {
    key  : 'floral',
    value: '#FFF2CC',
  },
];

/*eslint-disable*/
const imageList = [
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110828/Untitled-1_0054_dearjose0512-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110611/Untitled-1_0053_dearjose0524-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110828/Untitled-1_0054_dearjose0512-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110640/Untitled-1_0055_dearjose0498-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110618/Untitled-1_0052_dearjose0531-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/14103119/Untitled-3_0003_dearjose34814-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/14103043/Untitled-3_0001_dearjose34743-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/14103207/Untitled-3_0002_dearjose34773-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/14103119/Untitled-3_0003_dearjose34814-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/14103148/Untitled-3_0000_dearjose34718-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110714/Untitled-1_0012_dearjose1971-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110714/Untitled-1_0012_dearjose1971-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110908/Untitled-1_0013_dearjose1965-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110746/Untitled-1_0001_dearjose2289-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26170341/DearJosecape.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110615/Untitled-1_0007_dearjose2150-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110615/Untitled-1_0007_dearjose2150-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110554/Untitled-1_0006_dearjose2162-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26170344/DearJosecatcape.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110705/Untitled-1_0000_dearjose2291-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110835/Untitled-1_0042_dearjose0794-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110835/Untitled-1_0042_dearjose0794-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110633/Untitled-1_0043_dearjose0779-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110809/Untitled-1_0040_dearjose0827-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110824/Untitled-1_0041_dearjose0818-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110708/Untitled-1_0032_dearjose0974-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110708/Untitled-1_0032_dearjose0974-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110546/Untitled-1_0033_dearjose0944-copy-1.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110817/Untitled-1_0034_dearjose0924-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110916/Untitled-1_0035_dearjose0909-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110607/Untitled-1_0037_dearjose0867-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110607/Untitled-1_0037_dearjose0867-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110730/Untitled-1_0038_dearjose0848-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110803/Untitled-1_0039_dearjose0844-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110922/Untitled-1_0036_dearjose0894-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110623/Untitled-1_0031_dearjose1338-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110654/Untitled-1_0030_dearjose1371-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110753/Untitled-1_0029_dearjose1381-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110623/Untitled-1_0031_dearjose1338-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110757/Untitled-1_0028_dearjose1386-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110803/Untitled-1_0039_dearjose0844-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110803/Untitled-1_0039_dearjose0844-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110730/Untitled-1_0038_dearjose0848-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110607/Untitled-1_0037_dearjose0867-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110922/Untitled-1_0036_dearjose0894-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110636/Untitled-1_0046_dearjose0633-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110636/Untitled-1_0046_dearjose0633-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110832/Untitled-1_0045_dearjose0640-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110742/Untitled-1_0044_dearjose0659-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110644/Untitled-1_0047_dearjose0620-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110603/Untitled-1_0027_dearjose1463-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110603/Untitled-1_0027_dearjose1463-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110919/Untitled-1_0023_dearjose1507-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110925/Untitled-1_0025_dearjose1482-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110812/Untitled-1_0024_dearjose1483-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110734/Untitled-1_0011_dearjose2088-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110648/Untitled-1_0010_dearjose2105-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110734/Untitled-1_0011_dearjose2088-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110859/Untitled-1_0008_dearjose2131-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110905/Untitled-1_0009_dearjose2124-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110821/Untitled-1_0022_dearjose1831-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110821/Untitled-1_0022_dearjose1831-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110549/Untitled-1_0019_dearjose1869-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110626/Untitled-1_0021_dearjose1848-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110849/Untitled-1_0020_dearjose1866-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110651/Untitled-1_0002_dearjose2269-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110651/Untitled-1_0002_dearjose2269-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110738/Untitled-1_0003_dearjose2255-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110902/Untitled-1_0005_dearjose2222-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110630/Untitled-1_0004_dearjose2249-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110644/Untitled-1_0047_dearjose0620-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110742/Untitled-1_0044_dearjose0659-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110644/Untitled-1_0047_dearjose0620-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110832/Untitled-1_0045_dearjose0640-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110636/Untitled-1_0046_dearjose0633-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110812/Untitled-1_0024_dearjose1483-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110812/Untitled-1_0024_dearjose1483-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110925/Untitled-1_0025_dearjose1482-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110840/Untitled-1_0026_dearjose1473-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110919/Untitled-1_0023_dearjose1507-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110058/fw21_0006_DJ0449.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110058/fw21_0006_DJ0449.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110054/fw21_0005_DJ0457.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110050/fw21_0004_DJ0463.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110046/fw21_0003_DJ0485.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/08141841/Untitled-1_0020_DJ-0976.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/08141841/Untitled-1_0020_DJ-0976.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/08141851/Untitled-1_0021_DJ-0966.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/08141914/Untitled-1_0023_DJ-0923.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/08141906/Untitled-1_0022_DJ-0960.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/03/11172803/Spring-Tune-Shiny-Midi-Dress-4.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/03/11172803/Spring-Tune-Shiny-Midi-Dress-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/03/11172754/Spring-Tune-Shiny-Midi-Dress-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/03/11172735/Spring-Tune-Shiny-Midi-Dress-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/03/11172744/Spring-Tune-Shiny-Midi-Dress-2.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151722/CALYPSO-CUT-OUT-MINIDRESS-1.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151722/CALYPSO-CUT-OUT-MINIDRESS-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151759/CALYPSO-CUT-OUT-MINIDRESS-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151745/CALYPSO-CUT-OUT-MINIDRESS-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151734/CALYPSO-CUT-OUT-MINIDRESS-2.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110136/fw21a_0009_Background-copy-18.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110156/fw21b_0025_Background-copy-2.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110136/fw21a_0009_Background-copy-18.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110129/fw21a_0007_Background-copy-20.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110133/fw21a_0008_Background-copy-19.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/30150416/La-Petal-Mini-Dress-3.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/30150416/La-Petal-Mini-Dress-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/30150429/La-Petal-Mini-Dress-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/30150403/La-Petal-Mini-Dress-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/30150348/La-Petal-Mini-Dress-1.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/10/03163141/1-7-scaled.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/10/03163158/1-9-scaled.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/10/03163152/1-6-scaled.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/10/03163141/1-7-scaled.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/10/03163302/1-8-scaled.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17173124/FRIDA-SILKY-BABY-BLUE-TOP-4.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17173124/FRIDA-SILKY-BABY-BLUE-TOP-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17173113/FRIDA-SILKY-BABY-BLUE-TOP-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17173053/FRIDA-SILKY-BABY-BLUE-TOP-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17173104/FRIDA-SILKY-BABY-BLUE-TOP-2.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25225526/MARGARITA-BILLOW-BLOUSE-BLUE-3.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25225504/MARGARITA-BILLOW-BLOUSE-BLUE-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25225515/MARGARITA-BILLOW-BLOUSE-BLUE-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25225526/MARGARITA-BILLOW-BLOUSE-BLUE-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25225536/MARGARITA-BILLOW-BLOUSE-BLUE-4.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31160250/SOLOMON-CROPPED-SHIRT-IN-WHITE-4.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31160053/SOLOMON-CROPPED-SHIRT-IN-WHITE-1.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31160113/SOLOMON-CROPPED-SHIRT-IN-WHITE-2.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31160250/SOLOMON-CROPPED-SHIRT-IN-WHITE-4.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31160149/SOLOMON-CROPPED-SHIRT-IN-WHITE-3-scaled.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/25235044/MALIBU-KNIT-TANK-TOP-IN-WHITE-3-scaled.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/25234917/MALIBU-KNIT-TANK-TOP-IN-WHITE-1-scaled.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/25235059/MALIBU-KNIT-TANK-TOP-IN-WHITE-4.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/25235044/MALIBU-KNIT-TANK-TOP-IN-WHITE-3-scaled.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/25235016/MALIBU-KNIT-TANK-TOP-IN-WHITE-2-scaled.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08174534/HAVANA-OFF-SHOULDER-TOP-3.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08174534/HAVANA-OFF-SHOULDER-TOP-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08174605/HAVANA-OFF-SHOULDER-TOP-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08174522/HAVANA-OFF-SHOULDER-TOP-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08174551/HAVANA-OFF-SHOULDER-TOP-2.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/02/08140033/Untitled-1_0003_1-10.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/02/08140013/Untitled-1_0001_1-12.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/02/08140033/Untitled-1_0003_1-10.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/02/08140004/Untitled-1_0000_1-13.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/02/08140023/Untitled-1_0002_1-11.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25144337/Persephone-Floral-Shorts-2.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25144337/Persephone-Floral-Shorts-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25144326/Persephone-Floral-Shorts-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25144400/Persephone-Floral-Shorts-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25144348/Persephone-Floral-Shorts-3.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07214320/MYKONOS-LINEN-BLOUSE-3-scaled.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07214248/MYKONOS-LINEN-BLOUSE-2-scaled.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07214438/MYKONOS-LINEN-BLOUSE-4-scaled.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07214223/MYKONOS-LINEN-BLOUSE-1.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07214320/MYKONOS-LINEN-BLOUSE-3-scaled.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110117/fw21_0031_Group-1.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110117/fw21_0031_Group-1.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110114/fw21_0030_DJ0126.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110108/fw21_0029_DJ0147.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/12/17110102/fw21_0028_DJ0160.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31121003/MEMPHIS-CROPPED-TOP-IN-PINK-4.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31120924/MEMPHIS-CROPPED-TOP-IN-PINK-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31121003/MEMPHIS-CROPPED-TOP-IN-PINK-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31120953/MEMPHIS-CROPPED-TOP-IN-PINK-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31120934/MEMPHIS-CROPPED-TOP-IN-PINK-2.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/30170454/CORA-CROPPED-SHIRT-1-.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/30170511/CORA-CROPPED-SHIRT-2-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/30170454/CORA-CROPPED-SHIRT-1-.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/30170523/CORA-CROPPED-SHIRT-3-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/30170531/CORA-CROPPED-SHIRT-4-2.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25145520/Euphoria-Mini-Skort-4.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25145442/Euphoria-Mini-Skort-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25145506/Euphoria-Mini-Skort-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25145520/Euphoria-Mini-Skort-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/25145455/Euphoria-Mini-Skort-2.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25222207/SENTOSA-LINEN-TOP-ROSY-PINK-4.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25222308/SENTOSA-LINEN-TOP-ROSY-PINK-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25222248/SENTOSA-LINEN-TOP-ROSY-PINK-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25222207/SENTOSA-LINEN-TOP-ROSY-PINK-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/25222226/SENTOSA-LINEN-TOP-ROSY-PINK-3.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05093948/Untitled-1_0023_dearjose35148.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05093956/Untitled-1_0024_dearjose35124.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05094004/Untitled-1_0025_dearjose35091.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05093940/Untitled-1_0022_dearjose35153.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05093948/Untitled-1_0023_dearjose35148.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31112544/SOLOMON-CROPPED-SHIRT-IN-VIOLET-3.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31112452/SOLOMON-CROPPED-SHIRT-IN-VIOLET-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31112507/SOLOMON-CROPPED-SHIRT-IN-VIOLET-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31112544/SOLOMON-CROPPED-SHIRT-IN-VIOLET-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/31112554/SOLOMON-CROPPED-SHIRT-IN-VIOLET-4.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110658/Untitled-1_0003_dearjose0542-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110600/Untitled-1_0002_dearjose0577-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110913/Untitled-1_0001_dearjose0585-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110658/Untitled-1_0003_dearjose0542-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110800/Untitled-1_0000_dearjose0597-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05093807/Untitled-1_0006_dearjose36275.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05093814/Untitled-1_0007_dearjose36262.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05093807/Untitled-1_0006_dearjose36275.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05093758/Untitled-1_0005_dearjose36304.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/05093754/Untitled-1_0004_dearjose36322.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151827/HIBISCUS-LINEN-BRA-TOP-PINK-4.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151746/HIBISCUS-LINEN-BRA-TOP-PINK-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151800/HIBISCUS-LINEN-BRA-TOP-PINK-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151812/HIBISCUS-LINEN-BRA-TOP-PINK-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/31151827/HIBISCUS-LINEN-BRA-TOP-PINK-4.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08192625/HIBISCUS-LINEN-BRA-TOP-2.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08192625/HIBISCUS-LINEN-BRA-TOP-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08192650/HIBISCUS-LINEN-BRA-TOP-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08192716/HIBISCUS-LINEN-BRA-TOP-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/03/08192605/HIBISCUS-LINEN-BRA-TOP-1.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/10144313/Dearjose25628-2-2.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/10144313/Dearjose25628-2-2.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/10144118/Dearjose25669-2.webp)',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/10144112/Dearjose25638-2.webp)',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/08/10144106/Dearjose25633-2.webp)',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110845/Untitled-1_0018_dearjose1891-copy.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26105029/Untitled-1_0016_dearjose1916-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110845/Untitled-1_0018_dearjose1891-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110701/Untitled-1_0017_dearjose1899-copy.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/09/26110852/Untitled-1_0015_dearjose1926-copy.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141221/Untitled-1_0011_DJ-1224.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141221/Untitled-1_0011_DJ-1224.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141212/Untitled-1_0010_DJ-1227.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141202/Untitled-1_0009_DJ-1238.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141150/Untitled-1_0008_DJ-1269.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/11/17160902/Miuccia-Linen-Mini-Dress-4.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/11/17160855/Miuccia-Linen-Mini-Dress-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/11/17160846/Miuccia-Linen-Mini-Dress-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/11/17160902/Miuccia-Linen-Mini-Dress-4.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/11/17160838/Miuccia-Linen-Mini-Dress-1.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/29003206/Dearjose25212.webp',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/26005430/ARTEMIS-CUT-OUT-KNIT-MIDI-DRESS-1.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/26005523/ARTEMIS-CUT-OUT-KNIT-MIDI-DRESS-2.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/26005546/ARTEMIS-CUT-OUT-KNIT-MIDI-DRESS-4.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/05/29003206/Dearjose25212.webp',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/26152540/Olivia-Suit-Dress-In-Vanilla-3.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/26152540/Olivia-Suit-Dress-In-Vanilla-3.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/26152528/Olivia-Suit-Dress-In-Vanilla-2.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/26152516/Olivia-Suit-Dress-In-Vanilla-1.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/10/26152550/Olivia-Suit-Dress-In-Vanilla-4.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/12185827/Untitled-2_0022_DJ-0418.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/12185827/Untitled-2_0022_DJ-0418.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/12185820/Untitled-2_0021_DJ-0447.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/12185811/Untitled-2_0020_DJ-0473.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/05/12185801/Untitled-2_0019_DJ-0520.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141221/Untitled-1_0011_DJ-1224.jpg',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141221/Untitled-1_0011_DJ-1224.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141212/Untitled-1_0010_DJ-1227.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141202/Untitled-1_0009_DJ-1238.jpg',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2021/06/08141150/Untitled-1_0008_DJ-1269.jpg',
		],
	},
	{
		mainImage:
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07221254/SANTOS-CUT-OUT-TROUSER-2-scaled',
		detailImages: [
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07221219/SANTOS-CUT-OUT-TROUSER-1.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07221356/SANTOS-CUT-OUT-TROUSER-4.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07221342/SANTOS-CUT-OUT-TROUSER-3.webp',
			'https://mdj-01.nyc3.digitaloceanspaces.com/wp-content/uploads/2022/06/07221254/SANTOS-CUT-OUT-TROUSER-2-scaled',
		],
	},
];
/*eslint-enable*/

export { StorageKey, TIME, ValidApiStatus, colorList, imageList, sizeList };
