import { atom } from "jotai";

/**
 * Tạo danh sách trang cho 1 cuốn dạng notebook:
 * - Trang đầu: front = coverFront, back = ruledTexture
 * - N trang giữa: front = ruledTexture, back = ruledTexture
 * - Trang cuối: front = ruledTexture, back = coverBack
 */
export function buildNotebookPages({
  coverFront,
  coverBack,
  innerRuledCount = 10,
  ruledTexture = "ruled-paper",
}) {
  const pages = [
    { front: coverFront, back: ruledTexture },
    ...Array.from({ length: innerRuledCount }).map(() => ({
      front: ruledTexture,
      back: ruledTexture,
    })),
    { front: ruledTexture, back: coverBack },
  ];
  return pages;
}

/**
 * Mỗi cuốn có câu chuyện riêng (story).
 * Có thể thay đổi title/paragraphs cho phù hợp nội dung thực tế.
 */
export const BOOK_LIBRARY = [
  {
    id: "biz",
    title: "Notebook 01",
    pages: buildNotebookPages({
      coverFront: "thien-page-1",
      coverBack: "thien-page-2",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "thien-bookmark-1", back: "thien-bookmark-2" },
    story: {
      title: "Capital & Labour",
      paragraphs: [
        "Bức ảnh Capital & Labour là một hình ảnh châm biếm kinh điển minh họa sự bóc lột giai cấp trong xã hội công nghiệp.",
        "Ý tưởng: Thể hiện rõ ràng rằng sự giàu có và quyền lực của giới Tư bản (người đàn ông béo, sang trọng ngồi trên cao) được xây dựng và duy trì hoàn toàn bằng sức lực của giới Lao động (bốn công nhân oằn mình gánh đỡ ở dưới).",
        "Nhận xét: Bức ảnh này là biểu tượng mạnh mẽ của sự bất công và đấu tranh giai cấp, lý tưởng cho một notebook dùng để nghiên cứu các vấn đề xã hội. Nó đóng vai trò như lời nhắc nhở trực quan về sự bóc lột, kích thích tư duy phản biện. Cuối cùng, phong cách biếm họa cổ điển khiến cuốn sổ trở nên độc đáo và thu hút sự chú ý.",
      ],
    },
  },
  {
    id: "book-02",
    title: "Notebook 02",
    pages: buildNotebookPages({
      coverFront: "thien-page-3",
      coverBack: "thien-page-4",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "thien-bookmark-3", back: "thien-bookmark-4" },
    story: {
      title: "GROWING",
      paragraphs: [
        "Bức ảnh GROWING là một minh họa kỹ thuật số lạc quan, thể hiện quá trình tăng trưởng tài chính và sự nghiệp.",
        "Ý tưởng: Minh họa hành trình thành công, nơi một doanh nhân (người đàn ông mặc vest) đang bước lên các nấc thang lợi nhuận (các cột biểu đồ), tượng trưng cho sự tiến bộ và việc đầu tư sinh lời (các cây tiền và đồng xu vàng).",
        "Nhận xét: Bức ảnh có tính động lực cao, sử dụng màu sắc tươi sáng và biểu tượng rõ ràng (mũi tên lên, tiền xu) để truyền tải thông điệp về chuyên nghiệp, phát triển không ngừng và đạt được mục tiêu tài chính.",
      ],
    },
  },
  {
    id: "book-03",
    title: "Notebook 03",
   pages: buildNotebookPages({
      coverFront: "khang-page-1",
      coverBack: "khang-page-2",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "khang-bookmark-1", back: "khang-bookmark-1" },
    story: {
      title: "Đồng sáng tạo",
      paragraphs: [
        "Câu chuyện về cộng tác: các buổi workshop, canvas chiến lược, và phản hồi vòng lặp.",
        "Giá trị hình thành từ đối thoại, không chỉ từ một người viết.",
      ],
    },
  },
  {
    id: "book-04",
    title: "Notebook 04",
    pages: buildNotebookPages({
      coverFront: "khang-page-4",
      coverBack: "khang-page-3",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "khang-bookmark-2", back: "khang-bookmark-2" },
    story: {
      title: "Thiết kế trải nghiệm",
      paragraphs: [
        "Tập trung vào hành trình người dùng: bản đồ hoá touchpoint và khoảnh khắc chân thật.",
        "Mỗi phác thảo là một nguyên mẫu đợi được kiểm chứng.",
      ],
    },
  },
  {
    id: "book-05",
    title: "Notebook 05",
    pages: buildNotebookPages({
      coverFront: "phu-page-1",
      coverBack: "phu-page-2",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "phu-bookmark-1", back: "phu-bookmark-2" },
    story: {
      title: "Dữ liệu dẫn đường",
      paragraphs: [
        "Từ dashboard đến insight, các trang ghi lại mô hình đo lường và giả thuyết dữ liệu.",
        "Quyết định dựa trên bằng chứng, không chỉ trực giác.",
      ],
    },
  },
  {
    id: "book-06",
    title: "Notebook 06",
    pages: buildNotebookPages({
      coverFront: "phu-page-3",
      coverBack: "phu-page-4",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "phu-bookmark-3", back: "phu-bookmark-4" },
    story: {
      title: "Tăng trưởng bền vững",
      paragraphs: [
        "Chiến lược tăng trưởng đi đôi với bền vững: khách hàng trung thành và vòng đời sản phẩm.",
        "Lợi ích lâu dài là phương châm của mọi thử nghiệm.",
      ],
    },
  },
  {
    id: "book-07",
    title: "Notebook 07",
    pages: buildNotebookPages({
      coverFront: "long-page-1",
      coverBack: "long-page-2",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "long-bookmark-1", back: "long-bookmark-1" },
    story: {
      title: "Câu chuyện thương hiệu",
      paragraphs: [
        "Xây dựng bản sắc: giá trị cốt lõi, giọng điệu, và lời hứa thương hiệu.",
        "Từng trang là đoạn văn trong cuốn truyện kể cho khách hàng.",
      ],
    },
  },
  {
    id: "book-08",
    title: "Notebook 08",
    pages: buildNotebookPages({
      coverFront: "long-page-3",
      coverBack: "long-page-4",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "long-bookmark-2", back: "long-bookmark-2" },
    story: {
      title: "Tự động hoá thông minh",
      paragraphs: [
        "Ghi lại các quy tắc, bot, và workflow tự động hoá để tiết kiệm thời gian.",
        "Con người tập trung sáng tạo, máy móc xử lý lặp lại.",
      ],
    },
  },
  {
    id: "book-09",
    title: "Notebook 09",
    pages: buildNotebookPages({
      coverFront: "huy-page-1",
      coverBack: "huy-page-2",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "huy-bookmark-1", back: "huy-bookmark-1" },
    story: {
      title: "Dưới Bóng Gót Lãnh Đạo",
      paragraphs: [
        "Ẩn dụ trực diện về việc giá trị do lao động tạo ra bị nén lại ở dưới, trong khi quyền lực và hưởng thụ tập trung ở trên.",
        "Ý tưởng: Đặt ở trang mở đầu sổ tay kinh tế–chính trị hoặc làm nhãn kẹp trang kèm câu gợi nhớ “Ai nâng, ai đứng?” để mỗi lần mở sổ đều được nhắc về cơ chế tạo–chiếm giá trị thặng dư và động lực tìm phương án phân phối công bằng hơn.",
        "Nhận xét: Phông xanh lạnh đối lập với khối đen của chiếc giày khiến cảm giác áp lực tăng cao, còn hình dáng nhỏ bé của những người đội giày nhấn mạnh tương quan quyền lực. Vali và cà vạt cho thấy họ là những người làm công tri thức nhưng vẫn thành “vật chống đỡ” của hệ thống.",
      ],
    },
  },
  {
    id: "book-10",
    title: "Notebook 10",
    pages: buildNotebookPages({
      coverFront: "huy-page-4",
      coverBack: "huy-page-3",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "huy-bookmark-3", back: "huy-bookmark-4" },
    story: {
      title: "Ai Tạo – Ai Hưởng?",
      paragraphs: [
        "Một nhân vật phì nộn, ngậm xì gà, khoác ruy-băng đỏ đứng dạng tay đè lên những thân người gầy guộc – hình ảnh cô đọng sự bất bình đẳng và hành vi chiếm đoạt phần giá trị lao động của kẻ khác.",
        "Ý tưởng: Đưa vào sổ tay như một “tấm nhắc”: mở ra là thấy cấu trúc bóc lột – câu hỏi bật lên: “Ai tạo ra? Ai hưởng?” khơi gợi suy nghĩ về phân phối công bằng.",
        "Nhận xét: Sự phóng đại tỉ lệ cơ thể làm nổi bật lòng tham và quyền lực phình to từ nền lao động bị ép; động tác dẫm lên thân người tạo biểu tượng trực diện của lệ thuộc cưỡng ép; nét vẽ châm biếm sắc gọn khiến người xem vừa bật cười chua chát vừa suy ngẫm về cơ chế tạo ra giá trị thặng dư.",
      ],
    },
  },
];

// Atom: chỉ số cuốn hiện tại (đồng bộ Book và Bookmark)
export const currentBookAtom = atom(0);

// Atom: trang trong cuốn hiện tại (Book flip)
export const bookPageAtom = atom(0);

// Selector tiện dụng
export const currentBookSelector = atom((get) => BOOK_LIBRARY[get(currentBookAtom)]);
export const currentPagesSelector = atom((get) => get(currentBookSelector).pages);
export const currentBookmarkSelector = atom((get) => get(currentBookSelector).bookmark);