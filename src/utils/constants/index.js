const TIME = {
  ONE_SECOND: 1000,
  ONE_MINUTE: 60 * 1000,
  ONE_HOUR  : 60 * 60 * 1000,
};

const StorageKey = {
  accessToken: '@auth:accessToken',
};

const ValidApiStatus = [200, 201, 202, 203, 204];

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
];
/*eslint-enable*/

export { StorageKey, TIME, ValidApiStatus, imageList };
