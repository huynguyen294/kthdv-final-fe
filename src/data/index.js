import configData from '../configs/configs.json';
const basename = configData.basename;

export const images = {
  logoDark: basename + '/assets/images/logo/dark.png',
  logoLight: basename + '/assets/images/logo/light.png',
  loginBg: basename + '/assets/images/login/login-bg.png',
  sizeAo: basename + '/assets/images/cloth-size/size-ao.jpg',
  sizeQuan: basename + '/assets/images/cloth-size/size-quan.jpg',
  sizeShort: basename + '/assets/images/cloth-size/size-short.jpg',
  sizeHoddie: basename + '/assets/images/cloth-size/size-hoddie.jpg',
};

export const users = [
  {
    _id: '0',
    username: 'admin',
    password: '1234',
    name: 'Admin',
    sdt: '0978520403',
    address: '96A đường số 79 tân quy quận 7 thành phố hồ chí mình',
    email: 'anhhuy2099@gmail.com',
    gender: 'nam',
    birth_date: '29/4/2000',
    avatar: basename + '/assets/images/users/admin/avatar.jpg',
    nick_name: '',
  },
  {
    _id: '1',
    username: 'kh1@gmail.com',
    password: '1234',
    name: 'Khách Hàng 1',
    address: '32 Hai Bà Trừng Quận 3 Thành Phố Hồ Chí Mình',
    sdt: '096696696',
    email: 'kh1@gmail.com',
    gender: 'nu',
    birth_date: '20/2/1990',
    avatar: basename + '/assets/images/users/KH1/avatar.jpg',
    nick_name: '',
  },
];

export const category = [
  {
    _id: '1',
    name: 'bộ sưu tập',
  },
  {
    _id: '2',
    name: 'Đơn giản',
  },
  {
    _id: '3',
    name: 'Unisex',
  },
  {
    _id: '4',
    name: 'Áo thun',
  },
  {
    _id: '5',
    name: 'Áo khoác',
  },
  {
    _id: '6',
    name: 'Quần dài',
  },
  {
    _id: '7',
    name: 'Quần short',
  },
  {
    _id: '8',
    name: 'Phụ kiện',
  },
  {
    _id: '9',
    name: 'balo - túi',
  },
  {
    _id: '10',
    name: 'giày dép',
  },
  {
    _id: '11',
    name: 'flash sale',
  },
];

export const collections = [
  {
    _id: '1',
    category_id: '1',
    name: '12 vị anh hùng dân tộc',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '2',
    category_id: '1',
    name: 'Thần cổ đại',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '3',
    category_id: '1',
    name: 'Ngân hà',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '4',
    category_id: '1',
    name: 'Dị biệt',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '5',
    category_id: '2',
    name: 'Áo thun đơn giản',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '6',
    category_id: '2',
    name: 'Áo khoát đơn giản',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '7',
    category_id: '2',
    name: 'Quần dài đơn giản',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '8',
    category_id: '2',
    name: 'Quần shot đơn giản',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '9',
    category_id: '3',
    name: 'Áo unisex',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '10',
    category_id: '3',
    name: 'Áo unisex',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '11',
    category_id: '3',
    name: 'Quần unisex',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '12',
    category_id: '3',
    name: 'Linh vật',
    productIds: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: '13',
    category_id: '4',
    name: 'Áo thun form tiêu chuẩn',
    productIds: [1, 2, 3, 4, 5],
  },
  {
    _id: '14',
    category_id: '4',
    name: 'Áo thun form rộng',
    productIds: [1, 2, 3, 4, 5],
  },
  {
    _id: '15',
    category_id: '4',
    name: 'Áo thun 3 lỗ',
    productIds: [1, 2, 3, 4, 5],
  },
  {
    _id: '16',
    category_id: '4',
    name: 'Áo thun cổ tròn',
    productIds: [1, 2, 3, 4, 5],
  },
  {
    _id: '17',
    category_id: '5',
    name: 'Áo khoác có nón',
    productIds: [6, 7, 8, 9, 10],
  },
  {
    _id: '18',
    category_id: '5',
    name: 'Áo khoác thể thao',
    productIds: [6, 7, 8, 9, 10],
  },
  {
    _id: '19',
    category_id: '5',
    name: 'Áo hoddie',
    productIds: [6, 7, 8, 9, 10],
  },
  {
    _id: '20',
    category_id: '6',
    name: 'Quần tây',
    productIds: [11, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '21',
    category_id: '6',
    name: 'Quần Jogger',
    productIds: [11, 12, 13, 14, 15, 16, 20],
  },
  {
    _id: '22',
    category_id: '6',
    name: 'Quần Ống Rộng',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '23',
    category_id: '7',
    name: 'Quần jean',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '24',
    category_id: '7',
    name: 'Quần kaki',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '25',
    category_id: '7',
    name: 'Quần thun ngắn',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '26',
    category_id: '8',
    name: 'nón',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '27',
    category_id: '8',
    name: 'tất - vớ',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '28',
    category_id: '8',
    name: 'ví',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '29',
    category_id: '8',
    name: 'dây nịt',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '30',
    category_id: '9',
    name: 'balo nhỏ',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '31',
    category_id: '9',
    name: 'balo lớn',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '32',
    category_id: '9',
    name: 'túi chéo',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '33',
    category_id: '9',
    name: 'túi đựng laptop',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '34',
    category_id: '10',
    name: 'giày sandal',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '35',
    category_id: '10',
    name: 'giày bata',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
  {
    _id: '36',
    category_id: '10',
    name: 'dép lê',
    productIds: [14, 15, 16, 17, 18, 19, 20],
  },
];

/* const ao = [1, 2, 3, 4, 5];
const aokhoac = [6, 7, 8, 9, 10];
const quan = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; */

export const products = [
  {
    _id: '1',
    name: 'Áo Thun Cổ Tròn Đơn Giản Ngân Hà Space Ver14',
    price: 199000,
    sale: 99000,
    material: 'Mini Zurry',
    code: '001',
    image: basename + '/assets/images/products/1.jpg',
    description:
      'Áo Thun Cổ Tròn Đơn Giản Ngân Hà Space Ver14\nChất liệu: Cotton Compact\nThành phần: 100% Cotton\n- Thân thiện\n- Thấm hút thoát ẩm\n- Mềm mại\n- Kiểm soát mùi\n- Điều hòa nhiệt\n+ Họa tiết thêu\n- HDSD:\n+ Nên giặt chung với sản phẩm cùng màu\n+ Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh\n+ Nên phơi trong bóng râm để giữ sp bền màu',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '2',
    name: 'Áo Thun Cổ Trụ Tối Giản J01',
    price: 150000,
    sale: 78000,
    material: 'Poly',
    code: '002',
    description: `Chất liệu: Cotton 4 Chiều
          Thành phần: 95% cotton 5% Spandex
          - Co giãn tốt
          - Độ bền cao`,
    image: basename + '/assets/images/products/2.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '3',
    name: 'Áo Thun Cổ Tròn Linh Vật Bbuff Ver11',
    price: 200000,
    sale: 175000,
    material: 'Mini Zurry',
    code: '003',
    description: `Áo Thun Cổ Tròn Linh Vật Bbuff Ver11
          Chất liệu: Cotton Spandex
          Thành phần : 92% cotton 8% spandex
          - Thân thiện
          - Thấm hút thoát ẩm
          - Mềm mại, ít nhăn
          - Co giãn tối ưu
          - Kiểm soát mùi
          - Điều hòa nhiệt
          + Họa tiết Bbuff thêu
          - HDSD:
          + Nên giặt chung với sản phẩm cùng màu
          + Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh
          + Nên phơi trong bóng râm để giữ sp bền màu`,
    image: basename + '/assets/images/products/3.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '4',
    name: 'Áo Thun Cổ Tròn Đơn Giản Y Nguyên Bản Ver56',
    price: 199000,
    sale: 100000,
    material: 'Poly',
    code: '004',
    description: `Áo Thun Cổ Tròn Đơn Giản Y Nguyên Bản Ver56
          Chất liệu: Vải: thun gân sọc
          Thành phần: 90% Rayon 10% Spandex
          + May miếng đắp dệt`,
    image: basename + '/assets/images/products/4.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '5',
    name: 'Áo Thun Cổ Tròn Tối Giản M5',
    price: 185000,
    sale: 70000,
    material: 'Mini Zurry',
    code: '005',
    description: `Chất liệu: Cotton 2 chiều
          Thành phần: 100% Cotton
          - Co dãn 2 chiều
          - Thấm hút mồ hôi tốt mang lại cảm giác thoáng mát`,
    image: basename + '/assets/images/products/5.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '6',
    name: 'Áo Khoác Hoodie Đơn Giản Y Nguyên Bản Ver21',
    price: 299000,
    sale: 215000,
    material: 'Mini Zurry',
    code: '006',
    description: `Áo Khoác Hoodie Đơn Giản Y Nguyên Bản Ver21
          Chất liệu: Cotton Compact
          Thành phần: 100% Cotton
          - Thân thiện
          - Thấm hút thoát ẩm
          - Mềm mại
          - Kiểm soát mùi
          - Điều hòa nhiệt
          + Họa tiết thêu 3D
          - HDSD:
          + Nên giặt chung với sản phẩm cùng màu
          + Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh
          + Nên phơi trong bóng râm để giữ sp bền màu`,
    image: basename + '/assets/images/products/6.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '7',
    name: 'Áo Khoác Classic Đơn Giản Ngân Hà 4 Element Ver2',
    price: 385000,
    sale: 300000,
    material: 'Mini Zurry',
    code: '007',
    description: `- Chất liệu: MINI ZURRY
          - Thành Phần:
          + 94% COTTON
          - Thân thiện
          -Thấm hút thoát ẩm
          - Mềm mại
          - Ít nhăn
          + 6% SPANDEX
          Co giản tối ưu
          - Logo 4E phản quang
          - Bo tay xỏ ngón đa dụng
          - Khóa kéo cao qua cổ thích hợp đi trời nắng
          - Túi trước có dây kéo
          - Túi trong tiện dụng
          - Reverse Coil Zipper
          (Những chiếc khoá túi này có bề mặt ngoài dẹp, phẳng trong khi răng khoá thì ở trong)`,
    image: basename + '/assets/images/products/7.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '8',
    name: 'Áo Khoác Hoodie Tối Giản Ver4',
    price: 255000,
    sale: 200000,
    material: 'Mini Zurry',
    code: '008',
    description: `Áo Khoác Hoodie Đơn Giản Y Nguyên Bản Ver4
          Chất liệu: FRENCH TERRY
          Thành phần: 100% cotton
          - Thấm hút thoát ẩm
          - Mềm mại, ít nhăn
          - Co giãn tối ưu
          - Thân thiện môi trường
          - Kỹ thuật Thêu 3D + may đắp - May đắp logo`,
    image: basename + '/assets/images/products/8.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '9',
    name: 'Áo Khoác Classic Đơn Giản 12VAHDT Vạn Xuân Kiến Quốc M1',
    price: 499000,
    sale: 400000,
    material: 'Mini Zurry',
    code: '009',
    description: `- Chất liệu:
          MINI ZURRY
          Thành phần
          + 94% COTTON
          Thân thiện
          Thấm hút mồ hôi
          Mềm mại
          Ít nhăn
          + 6% SPANDEX
          Giúp áo co giãn tối ưu
          - Bo tay xỏ ngón tiện dụng
          - Reverse Coil Zipper
          (Những chiếc khoá này có bề mặt ngoài dẹp, phẳng trong khi răng khoá thì ở trong)
          - Dây cố định nón phản quang
          - Ép decal phản quang logo VXKQ
          - Túi trong tiện lợi
          - Khóa cao qua cằm`,
    image: basename + '/assets/images/products/9.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '10',
    name: 'Áo Khoác Classic Tối Giản Ver6',
    price: 265000,
    sale: 220000,
    material: 'Poly',
    code: '0010',
    description: `Áo Khoác Classic Đơn Giản Y Nguyên Bản Ver6
          Chất liệu: Vải Dù
          Thành phần: 100% poly
          - Chống tia UV
          - Cản gió
          - Nhanh khô
          - Bền màu tốt
          -Trượt nước
          + Túi trong tiện dụng
          + Reverse Coil Zipper
          (Những chiếc khoá túi này có bề mặt ngoài dẹp, phẳng trong khi răng khoá thì ở trong)
          - Tặng kèm túi đựng áo khoác`,
    image: basename + '/assets/images/products/10.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '11',
    name: 'Quần Jogger Đơn Giản Y Nguyên Bản Ver4',
    price: 349000,
    sale: 300000,
    material: 'Poly',
    code: '0011',
    description: `Quần Dài Jogger Đơn Giản Y Nguyên Bản Ver4
          - Chất liệu: MINI ZURRY
          - Thành Phần:
          + 94% COTTON
          - Thân thiện
          -Thấm hút thoát ẩm
          - Mềm mại
          - Ít nhăn
          + 6% SPANDEX
          Co giản tối ưu
          - Họa tiết in dẻo + thêu`,
    image: basename + '/assets/images/products/11.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '12',
    name: 'Quần Jean Straight Đơn Giản Y Nguyên Bản Ver5',
    price: 285000,
    sale: 200000,
    material: 'Mini Zurry',
    code: '0012',
    description: `Quần Dài Jean Straight Đơn Giản Y Nguyên Bản Ver5
          - Chất liệu: Jean
          - Thành phần: 99% cotton 1% spandex
          + Wash thời trang
          + Thêu #y2010 túi sau`,
    image: basename + '/assets/images/products/12.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '13',
    name: 'Quần Ống Rộng Đơn Giản Y Nguyên Bản Ver3',
    price: 319000,
    sale: 275000,
    material: 'Poly',
    code: '0013',
    description: `Quần Dài Sweatpants Đơn Giản Y Nguyên Bản Ver3
          Chất liệu: Vải Dù
          Thành phần: 100% poly
          - Co giãn
          - Vải nhẹ
          - Mềm mịn
          - Độ bền
          - Dễ dàng giặt ủi
          + Họa tiết in dẻo
          + Hai túi trước có dây kéo
          + Dây Rút Giấu Cạp Trong
          + Gấu quần bo vào mắt cá chân, cực kì hiệu quả trong việc che khuyết điểm`,
    image: basename + '/assets/images/products/13.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '14',
    name: 'Quần Jean Slimfit Đơn Giản Thần Cổ Đại Valknut Ver1',
    price: 425000,
    sale: 389000,
    material: 'Poly',
    code: '0014',
    description: `Quần Dài Jean Slimfit Đơn Giản Thần Cổ Đại Valknut Ver1
          Chất liệu: Jean Cotton
          Thành phần: 98% cotton 2% spandex
          - Co giãn tốt
          - Độ bền cao
          - Thoáng mát
          + Họa tiết thêu
          + Wash thời trang`,
    image: basename + '/assets/images/products/14.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '15',
    name: 'Quần Tây Tối Giản HG10',
    price: 385000,
    sale: 300000,
    material: 'Poly',
    code: '0015',
    description: `Chất liệu: Vải Quần Tây
          Thành phần: 70% poly 27% rayon 3% spandex
          - Mềm mại, bề mặt vải trơn mịn, cảm giác mát nhẹ khi mặc.
          - Thiết kế quần ống đứng mang đến sự lịch lãm, tự tin và nam tính cho người mặc.
          - Phù hợp với nhiều môi trường khác nhau như đi làm, đi tiệc, đi học, đi chơi.`,
    image: basename + '/assets/images/products/15.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '16',
    name: 'Quần Dài Vải Đơn Giản Y Nguyên Bản Ver7',
    price: 319000,
    sale: 375000,
    material: 'Mini Zurry',
    code: '0016',
    description: `Quần Dài Vải Đơn Giản Y Nguyên Bản Ver7
          Chất liệu: Vải kaki
          Thành phần: 98% cotton 2% spandex
          - Co giãn tốt
          - Độ bền cao
          - Thoáng mát
          + Họa tiết mmay miếng đắp logo kim loại
          `,
    image: basename + '/assets/images/products/16.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '17',
    name: 'Quần Short Đơn Giản M7',
    price: 185000,
    sale: 125000,
    material: 'Mini Zurry',
    code: '0017',
    description: `Quần Short Đơn Giản M7
          Chất liệu: Vải Kaki nhung
          Thành phần: 75% cotton 25% poly
          - Họa tiết thêu đắp giống
          `,
    image: basename + '/assets/images/products/17.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '18',
    name: 'Quần Short Đơn Giản M12',
    price: 225000,
    sale: 199000,
    material: 'Mini Zurry',
    code: '0018',
    description: `Quần Short Đơn Giản M12
          Chất liệu: Vải kaki bố
          Thành phần : 100% Cotton
          - May logo túi sau
          `,
    image: basename + '/assets/images/products/18.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '19',
    name: 'Quần Short Đơn Giản M7',
    price: 185000,
    sale: 120000,
    material: 'Poly',
    code: '0019',
    description: `Quần Short Đơn Giản M7
          Chất liệu: Vải Kaki nhung
          Thành phần: 75% cotton 25% poly
          - Họa tiết thêu đắp giống
          `,
    image: basename + '/assets/images/products/19.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
  {
    _id: '20',
    name: 'Quần Short Đơn Giản M2',
    price: 250000,
    sale: 210000,
    material: 'Mini Zurry',
    code: '0020',
    description: `Chất liệu: Jean Cotton
          Thành phần: 99% cotton 1% spandex
          `,
    image: basename + '/assets/images/products/20.jpg',
    size: ['M', 'L', 'XL', 'XXL'],
  },
];
