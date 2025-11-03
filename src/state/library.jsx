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
      coverFront: "page-1-thien",
      coverBack: "page-2-thien",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "bookmark-2-thien", back: "bookmark-2-thien" },
    story: {
      title: "Khởi nguồn ý tưởng",
      paragraphs: [
        "Cuốn sổ mở đầu cho hành trình ghi chép tư duy kinh doanh, nơi mọi ý tưởng thô sơ được nhen nhóm.",
        "Từ bản phác thảo đầu tiên đến kế hoạch hành động, từng trang là một bước gần hơn tới sản phẩm thật.",
      ],
    },
  },
  {
    id: "book-02",
    title: "Notebook 02",
    pages: buildNotebookPages({
      coverFront: "page-3-thien",
      coverBack: "page-4-thien",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "bookmark-1-thien", back: "bookmark-1-thien" },
    story: {
      title: "Tối ưu quy trình",
      paragraphs: [
        "Cuốn số 2 tập trung vào luồng công việc: tiêu chuẩn hoá, đo lường, và cải thiện liên tục.",
        "Mỗi ghi chú là một thử nghiệm nhỏ dẫn đến hiệu quả lớn.",
      ],
    },
  },
  {
    id: "book-03",
    title: "Notebook 03",
   pages: buildNotebookPages({
      coverFront: "page-1-khang",
      coverBack: "page-2-khang",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "bookmark-2-khang", back: "bookmark-1-khang" },
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
      coverFront: "book-cover",
      coverBack: "book-back",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "book-cover", back: "book-back" },
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
      coverFront: "page-1-phu",
      coverBack: "page-2-phu",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "bookmark-1-phu", back: "bookmark-2-phu" },
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
      coverFront: "book-cover",
      coverBack: "book-back",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "book-cover", back: "book-back" },
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
      coverFront: "book-cover",
      coverBack: "book-back",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "book-cover", back: "book-back" },
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
      coverFront: "book-cover",
      coverBack: "book-back",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "book-cover", back: "book-back" },
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
      coverFront: "book-cover",
      coverBack: "book-back",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "book-cover", back: "book-back" },
    story: {
      title: "Sản phẩm và thị trường",
      paragraphs: [
        "Ghi chú về định vị, phân khúc, và phản hồi thị trường.",
        "Sự phù hợp sản phẩm-thị trường được xây dựng từng giả thuyết nhỏ.",
      ],
    },
  },
  {
    id: "book-10",
    title: "Notebook 10",
    pages: buildNotebookPages({
      coverFront: "book-cover",
      coverBack: "book-back",
      innerRuledCount: 10,
      ruledTexture: "ruled-paper",
    }),
    bookmark: { front: "book-cover", back: "book-back" },
    story: {
      title: "Tổng kết hành trình",
      paragraphs: [
        "Một chặng đường tròn vẹn: bài học, sai lầm, và khoảnh khắc đáng nhớ.",
        "Điểm dừng để bắt đầu một hành trình mới với trải nghiệm sâu sắc hơn.",
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