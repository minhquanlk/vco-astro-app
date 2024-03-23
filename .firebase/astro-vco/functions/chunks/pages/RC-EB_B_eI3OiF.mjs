/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderScript, g as renderSlot, h as addAttribute, i as renderHead, m as maybeRenderHead, e as renderComponent } from '../astro_CIO9HP5M.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const defaultLang = "vi";
const ui = {
  en: {
    "ico": "/language/english.svg",
    "nav.home": "Home",
    "nav.rceb": "Course",
    "title": "V-IWW: Optimized Employer Branding & Talent Acquisition",
    "description": "A targeted course for managers, specialist and juniors eager to elevate their recruitment game. It provides actionable insights into establishing a compelling employer brand and effective talent acquisition strategies. Get ready to transform your approach to attracting, engaging, and retaining top talent in this dynamic, expert-led training experience.",
    "regNow": "Register Now!",
    "titleWhy": "Why you need this class?",
    "why1": "1. The core elements that set employers apart in the competitive landscape of 2024.",
    "why2": "2. Optimizing the recruitment process to increase employee retention rates.",
    "why3": "3. Things to consider when implementing recruitment communication activities with partners.",
    "why4": "4. Recruitment brand of a startup vs. an established business.",
    "why5": "5. Core criteria for recruiters to choose courteous recruitment communication partners.",
    "why6": "6. The social responsibility of recruiters when implementing communication and career guidance.",
    "titleUSPs": "Training USPs:",
    "usp1-title": "Expert-Led Insights",
    "usp1-des": "Learners gain access to wisdom and strategies from seasoned professionals with proven success in employer branding and talent acquisition, ensuring teachings are grounded in real-world experiences and current best practices.",
    "usp2-title": "Interactive Learning Experience",
    "usp2-des": "The course emphasizes interactive elements, including teamwork, Q&A sessions, and case studies from big companies, allowing participants to apply concepts in practical scenarios, fostering a deeper understanding and skill retention.",
    "usp3-title": "Customizable Strategies",
    "usp3-des": "It offers tools and frameworks that participants can tailor to their organization's specific needs, ensuring the applicability of learned strategies across various industries and company sizes.",
    "usp4-title": "Personalized Feedback",
    "usp4-des": "Through assignments and projects, learners receive personalized feedback from experts, allowing for tailored advice that helps refine their strategies and improve their approaches to challenges specific to their context.",
    "titleWhat": "What you get after training:",
    "what1-title": "Enhanced Knowledge and Skills",
    "what1-des": "A deeper understanding of employer branding and talent acquisition strategies, including how to effectively attract, engage, and retain top talent. Learners will acquire both theoretical insights and practical skills that can be applied directly to their current roles or future career opportunities.",
    "what2-title": "Practical Tools and Resources",
    "what2-des": "Access to a variety of tools, templates, and resources that can be utilized to implement strategies learned during the course. These materials serve as a valuable reference for learners to apply best practices in their organizations.",
    "what3-title": "Improved Problem-Solving Abilities",
    "what3-des": "The ability to identify challenges within the recruitment process and develop creative solutions. The course encourages critical thinking and problem-solving, equipping learners with the capability to tackle issues effectively and innovate within their roles.",
    "what4-title": "Professional Network Expansion",
    "what4-des": "Connections with fellow learners, instructors, and industry professionals. The course offers networking opportunities that can lead to collaborative projects, mentorship, and career advancement.",
    "what5-title": "Confidence in Strategy Implementation",
    "what5-des": "With the knowledge, skills, and tools gained from the course, learners will feel more confident in their ability to contribute to their organization's success through improved employer branding and talent acquisition strategies.",
    "what6-title": "Certification of Completion",
    "what6-des": "A certificate that validates the learner's accomplishment and dedication to professional development.",
    "commit1-title": "Commitment to Practical Application",
    "commit1-des": "The course content is not only relevant to the current demands and trends in the field but also continuously updated to reflect the latest industry developments. This ensures that learners receive the most current and applicable knowledge, preparing them for real-world challenges and opportunities.",
    "commit2-title": "Commitment to Personalized Learning and Growth",
    "commit2-des": "Experts are committed to understanding individual learner goals, providing customized feedback, and adapting teaching methods to meet diverse needs. This ensures that learners receive the most relevant and applicable knowledge, preparing them for career development in the future.",
    "titleTime": "Training Timetable",
    "time1": "Thursday 28/03",
    "time2": "Saturday 30/03",
    "time3": "Tuesday 02/04",
    "time4": "Thursday 04/04",
    "time5": "Saturday 06/04",
    "module1-title": "Module 1: Talent Acquisition",
    "module2-title": "Module 2: Full Cycle Recruiting",
    "module3-title": "Module 3: Employer Branding",
    "module4-title": "Module 4: Recruiting Strategies & HR Trends",
    "module5-title": "Module 5: Employee & Candidate Experience",
    "module1-des1": "Talent Acquisition Foundation",
    "module1-des2": "Building a Talent Acquisition Strategy",
    "module1-des3": "Talent Acquisition Process",
    "module1-des4": "Talent Acquisition Best Practices",
    "module1-des5": "Talent Acquisition Analytics",
    "module1-des6": "Talent Acquisition Trends",
    "module2-des1": "Preparing",
    "module2-des2": "Sourcing",
    "module2-des3": "Screening",
    "module2-des4": "Selecting",
    "module2-des5": "Hiring",
    "module2-des6": "Onboarding",
    "module3-des1": "Corporate Culture",
    "module3-des2": "Employer Value Proposition",
    "module3-des3": "Employer Brand",
    "module3-des4": "Employer Branding Strategies",
    "module3-des5": "Employer Branding Metrics",
    "module4-des1": "10 Recruiting Strategies To Hire Top Talent",
    "module4-des2": "10 HR Trends for Elevating Work",
    "module5-des1": "Employee Experience Journey Mapping",
    "module5-des2": "Human Centrics",
    "titleTrainers": "Trainers",
    "trainer1-des1": "CEO at VCO GROUP.",
    "trainer1-des2": "Asia Pacific Senior Sales Manager at EVF USA.",
    "trainer1-des3": "6 years of experience in Career Coach and Employability Development.",
    "trainer1-des4": "Certified Excellence Consultant by American Society for Quality Experts.",
    "trainer1-des5": "Partnership with 65+ reputed employers in employer branding and recruitment marketing projects.",
    "trainer2-des1": "Certificate: Customer Experience Manager Master Course",
    "trainer2-des2": "Strategic Consulting and Collaborative Implementation of Customer Experience for SMEs",
    "trainer2-des3": "Community Experience Manager with over 14,000 members, founder of the Practical Customer Service Community",
    "trainer2-des4": "Conducted over 500 hours of direct training within businesses",
    "trainer2-des5": "Author of more than 50 articles and organizer of CX Seminars for businesses",
    "titleFee": "Entrnace Fee",
    "feeBtn": "Choose the plan",
    "fee1-title": "Early Bird",
    "fee1-des": "Join the course early.",
    "fee1-day": "Before 21/03/2024",
    "fee2-title": "Standard",
    "fee2-des": "Entrance fee for all 5 modules.",
    "fee2-day": "After 21/03/2024",
    "titleForm": "REGISTER FOR V-IWW",
    "desForm": "and VCO GROUP will contact you for consultation at the earliest opportunity.",
    "deadlineForm": "Registration Deadline:",
    "notiRequire": "Required",
    "form-field1": "1. Full Name: ",
    "field1-holder": "Enter your name",
    "form-field2": "2. Phone Number: ",
    "field2-holder": "Enter your Phone Number",
    "form-field3": "3. Email: ",
    "field3-holder": "Enter your Email",
    "form-field4": "4. You are currently a/an: ",
    "field-option": "Choose your answer",
    "field4-option1": "Student",
    "field4-option2": "Graduate",
    "field4-option3": "Other",
    "form-field5": "5. Your level at work: ",
    "field5-option1": "Manager at a business",
    "field5-option2": "Specialist at a business",
    "field5-option3": "Fresher/Junior at a business",
    "field5-option4": "Internship",
    "field5-option5": "You have not started working",
    "field5-option6": "Other",
    "form-field6": "6. Facebook: ",
    "field6-holder": "Enter your Facebook link",
    "form-field7": "7. Linkedin: ",
    "field7-holder": "Enter your Linkedin link",
    "form-field8": "8. How did you know about this class ",
    "field8-option1": "VCO GROUP's Fanpages",
    "field8-option2": "Student clubs",
    "field8-option3": "Friends' recommendation",
    "field8-option4": "Email Marketing",
    "field8-option5": "Following Trainers",
    "field8-option6": "Other",
    "form-field9": "9. What are your expectations when participating in the V-IWW: Optimized Employer Branding & Talent Acquisition ?",
    "field9-holder": "Enter your Answer",
    "form-submit-btn": "Submit",
    "requireNoti": "This field is required.",
    "foot-address-1": "Office Address",
    "address-1": "279 Hong Bang Street, Ward 11, District 5, Ho Chi Minh City",
    "foot-address-2": "Headquarter Address",
    "address-2": "C9, N2 Street, KDC Jamono Golden Silk, Tan Thuan Dong Ward, district 7, Ho Chi Minh City",
    "foot-time": "Office Time",
    "foot-time-des": "Monday to Sunday",
    "foot-contact": "Free Consultancy",
    "foot-contact-1": "Chief Executive Officer",
    "foot-contact-2": "Head of Partnership Success",
    "foot-social": "Social Media"
  },
  vi: {
    "ico": "/language/vietnamese.svg",
    "nav.home": "Trang chủ",
    "nav.rceb": "Khóa học",
    "title": "V-IWW: Tối ưu hóa Employer Branding & Talent Acquisition",
    "description": "Một khóa học dành cho các quản lý, chuyên viên và những người mới bắt đầu để nâng cao kỹ năng tuyển dụng của mình. Khóa học cung cấp những thông tin hành động cụ thể về việc thiết lập một chương trình Employer Branding hấp dẫn và các chiến lược thu hút nhân tài hiệu quả. Hãy sẵn sàng để biến cách tiếp cận của bạn đối với việc thu hút, tương tác và giữ chân nhân tài hàng đầu trong trải nghiệm đào tạo chuyên môn này.",
    "regNow": "Đăng ký ngay!",
    "titleWhy": "Tại sao bạn cần khóa học này?",
    "why1": "1. Các yếu tố cốt lõi làm nổi bật nhà tuyển dụng trong bối cảnh cạnh tranh năm 2024.",
    "why2": "2. Tối ưu hóa quy trình tuyển dụng để tăng tỷ lệ giữ chân nhân viên.",
    "why3": "3. Những điều cần xem xét khi triển khai các hoạt động giao tiếp tuyển dụng với đối tác.",
    "why4": "4. Thương hiệu tuyển dụng của một doanh nghiệp khởi nghiệp so với một doanh nghiệp đã thành lập.",
    "why5": "5. Tiêu chí cốt lõi để các nhà tuyển dụng lựa chọn đối tác tuyển dụng tử tế.",
    "why6": "6. Trách nhiệm xã hội của các nhà tuyển dụng khi triển khai truyền thông và hướng nghiệp.",
    "titleUSPs": "Điểm độc đáo của khóa học:",
    "usp1-title": "Chuyên gia Dẫn dắt",
    "usp1-des": "Học viên có cơ hội tiếp cận kiến thức và chiến lược từ các chuyên gia giàu kinh nghiệm đã thành công trong việc xây dựng Employer Branding và Talent Acquisition, đảm bảo rằng các bài học được đặt trên nền tảng của các kinh nghiệm thực tế và các phương pháp tốt nhất hiện nay.",
    "usp2-title": "Trải nghiệm Học tập Tương tác",
    "usp2-des": "Khóa học nhấn mạnh các yếu tố tương tác, bao gồm công việc nhóm, phiên hỏi đáp và các case study thực tế từ các công ty lớn, cho phép các thành viên giải quyết vấn đề trong các tình huống thực tế, tạo ra sự hiểu biết sâu hơn và trau dồi kỹ năng vốn có.",
    "usp3-title": "Tinh chỉnh trong chiến lược",
    "usp3-des": "Khóa học cung cấp các công cụ và khung làm việc mà các học viên có thể tinh chỉnh cho nhu cầu cụ thể của tổ chức của họ, đảm bảo tính ứng dụng của các chiến lược đã học trên các ngành công nghiệp và kích thước công ty khác nhau.",
    "usp4-title": "Phản hồi cá nhân",
    "usp4-des": "Thông qua các bài tập và dự án, học viên nhận được phản hồi cá nhân từ các chuyên gia, cho phép nhận được lời khuyên tùy chỉnh giúp hoàn thiện các chiến lược và cải thiện các phương pháp tiếp cận thách thức cụ thể trong bối cảnh của họ.",
    "titleWhat": "Những gì bạn nhận được sau khóa học:",
    "what1-title": "Nâng cao kiến thức và kỹ năng",
    "what1-des": "Một hiểu biết sâu sắc về các chiến lược xây dựng Emloyer Branding và Talent Acquisition, bao gồm cách thu hút, tương tác và giữ chân nhân tài hàng đầu một cách hiệu quả. Học viên sẽ thu được cả cái nhìn lý thuyết và kỹ năng thực hành có thể áp dụng trực tiếp vào vai trò hiện tại hoặc cơ hội sự nghiệp trong tương lai của họ.",
    "what2-title": "Công cụ và tài nguyên thực hành",
    "what2-des": "Tiếp cận với nhiều công cụ, mẫu và tài nguyên khác nhau có thể được sử dụng để triển khai các chiến lược học được trong suốt khóa học. Những tài liệu này đóng vai trò là tài liệu tham khảo quý giá giúp học viên áp dụng các phương pháp tốt nhất trong tổ chức của họ.",
    "what3-title": "Cải thiện khả năng giải quyết vấn đề",
    "what3-des": "Khả năng nhận biết các thách thức trong quá trình tuyển dụng và phát triển các giải pháp sáng tạo. Khóa học khuyến khích tư duy phê phán và giải quyết vấn đề, trang bị cho học viên khả năng giải quyết vấn đề một cách hiệu quả và đổi mới trong vai trò của họ.",
    "what4-title": "Mở rộng mạng lưới chuyên môn",
    "what4-des": "Kết nối với các học viên khác, giảng viên và các chuyên gia ngành. Khóa học cung cấp cơ hội và mạng lưới có thể dẫn đến các dự án hợp tác, sự hướng dẫn và thăng tiến trong sự nghiệp.",
    "what5-title": "Sự Tự tin trong triển khai chiến lược",
    "what5-des": "Với kiến thức, kỹ năng và công cụ thu được từ khóa học, học viên sẽ cảm thấy tự tin hơn trong khả năng góp phần vào thành công của tổ chức thông qua việc cải thiện các chiến lược xây dựng thương hiệu nhà tuyển dụng và thu hút nhân tài.",
    "what6-title": "Chứng chỉ Hoàn thành",
    "what6-des": "Một chứng chỉ chứng nhận thành tựu của học viên và sự cam kết của họ đối với phát triển chuyên môn.",
    "commit1-title": "Cam kết về Ứng dụng thực tiễn",
    "commit1-des": "Nội dung khóa học không chỉ phản ánh các yêu cầu và xu hướng hiện tại trong lĩnh vực mà còn được cập nhật liên tục để phản ánh những tiến triển mới nhất trong ngành. Điều này đảm bảo rằng các học viên nhận được kiến thức hiện đại và áp dụng được nhất, chuẩn bị cho họ đối mặt với các thách thức và cơ hội trong thực tế.",
    "commit2-title": "Cam kết về Học tập và Phát triển Cá nhân",
    "commit2-des": "Các chuyên gia cam kết hiểu rõ mục tiêu cá nhân của từng học viên, cung cấp phản hồi và điều chỉnh phương pháp giảng dạy để đáp ứng các nhu cầu đa dạng. Điều này đảm bảo rằng các học viên nhận được kiến thức phù hợp và áp dụng được nhất, chuẩn bị cho họ phát triển sự nghiệp trong tương lai.",
    "titleTime": "Thời khóa biểu",
    "time1": "Thứ Năm 28/03",
    "time2": "Thứ Bảy 30/03",
    "time3": "Thứ Ba 02/04",
    "time4": "Thứ Năm 04/04",
    "time5": "Thứ Bảy 06/04",
    "module1-title": "Module 1: Talent Acquisition",
    "module2-title": "Module 2: Chu trình tuyển dụng đầy đủ",
    "module3-title": "Module 3: Employer Branding",
    "module4-title": "Module 4: Chiến lược tuyển dụng & Xu hướng nhân sự",
    "module5-title": "Module 5: Kinh nghiệm thực tế của nhân viên và ứng viên",
    "module1-des1": "Nền tảng Thu hút nhân tài",
    "module1-des2": "Xây dựng Chiến lược Thu hút nhân tài",
    "module1-des3": "Quy trình Thu hút nhân tài",
    "module1-des4": "Các Phương Pháp Tốt nhất trong Thu hút nhân tài",
    "module1-des5": "Phân tích Talent Acquisition",
    "module1-des6": "Xu hướng Talent Acquisition",
    "module2-des1": "Chuẩn bị",
    "module2-des2": "Tìm kiếm",
    "module2-des3": "Lọc hồ sơ",
    "module2-des4": "Lựa chọn",
    "module2-des5": "Tuyển dụng",
    "module2-des6": "Hội nhập nhân sự mới",
    "module3-des1": "Văn hóa Doanh nghiệp",
    "module3-des2": "Đề xuất Giá trị của Nhà tuyển dụng",
    "module3-des3": "Thương hiệu Nhà tuyển dụng",
    "module3-des4": "Chiến lược Xây dựng Thương hiệu Nhà tuyển dụng",
    "module3-des5": "Các chỉ số Đo lường Thương hiệu Nhà tuyển dụng",
    "module4-des1": "10 Chiến lược Tuyển dụng để Thu hút Nhân tài hàng đầu",
    "module4-des2": "10 Xu hướng Nhân sự để Nâng cao Công việc",
    "module5-des1": "Định vị Hành trình Trải nghiệm Nhân viên",
    "module5-des2": "Lấy yếu tố con người làm trung tâm",
    "titleTrainers": "Giảng viên",
    "trainer1-des1": "Giám đốc điều hành tại VCO GROUP.",
    "trainer1-des2": "Quản lý Bán hàng Cấp cao Châu Á Thái Bình Dương tại EVF USA.",
    "trainer1-des3": "6 năm kinh nghiệm trong lĩnh vực Huấn luyện Sự nghiệp và Phát triển Khả năng Làm việc.",
    "trainer1-des4": "Chuyên gia Tư vấn Xuất sắc được chứng nhận bởi American Society for Quality Experts.",
    "trainer1-des5": "Hợp tác với hơn 65 nhà tuyển dụng uy tín trong các dự án về Employer Branding & Recruitment Marketing.",
    "trainer2-des1": "Chứng chỉ: Khóa học Master Quản lý Trải nghiệm Khách hàng",
    "trainer2-des2": "Tư vấn Chiến lược và Triển khai Hợp tác về Trải nghiệm Khách hàng cho Doanh nghiệp Vừa và Nhỏ",
    "trainer2-des3": "Quản lý Trải nghiệm Cộng đồng với hơn 14.000 thành viên, người sáng lập của Cộng đồng Dịch vụ Khách hàng Thực tế",
    "trainer2-des4": "Tiến hành hơn 500 giờ đào tạo trực tiếp trong các doanh nghiệp",
    "trainer2-des5": "Tác giả của hơn 50 bài viết và tổ chức các Hội thảo Trải nghiệm Khách hàng cho doanh nghiệp",
    "titleFee": "Phí Đăng ký",
    "feeBtn": "Đăng ký",
    "fee1-title": "Early Bird",
    "fee1-des": "Đăng ký khóa học sớm.",
    "fee1-day": "Trước ngày 21/03/2024",
    "fee2-title": "Standard",
    "fee2-des": "Học phí cho toàn bộ 5 buổi học.",
    "fee2-day": "Sau ngày 21/03/2024",
    "titleForm": "ĐƠN ĐĂNG KÝ V-IWW",
    "desForm": "VCO GROUP sẽ liên hệ với bạn để tư vấn sớm nhất.",
    "deadlineForm": "Hạn đăng ký:",
    "notiRequire": "Bắt buộc",
    "form-field1": "1. Họ và tên: ",
    "field1-holder": "Nhập họ và tên của bạn",
    "form-field2": "2. Số điện thoại: ",
    "field2-holder": "Nhập số điện thoại của bạn",
    "form-field3": "3. Email: ",
    "field3-holder": "Nhập Email của bạn",
    "form-field4": "4. Hiện tại bạn đang là: ",
    "field-option": "Chọn câu trả lời",
    "field4-option1": "Sinh viên",
    "field4-option2": "Đã tốt nghiệp",
    "field4-option3": "Khác",
    "form-field5": "5. Cấp bậc công việc hiện tại của bạn: ",
    "field5-option1": "Quản lý/Trưởng phòng",
    "field5-option2": "Chuyên viên",
    "field5-option3": "Nhân viên",
    "field5-option4": "Thực tập sinh",
    "field5-option5": "Hiện tại chưa có việc làm",
    "field5-option6": "Khác",
    "form-field6": "6. Facebook: ",
    "field6-holder": "Nhập đường dẫn Facebook của bạn",
    "form-field7": "7. Linkedin: ",
    "field7-holder": "Nhập đường dẫn Linkedin của bạn",
    "form-field8": "8. Bạn biết khóa học qua đâu? ",
    "field8-option1": "Hệ thống trang của VCO GROUP",
    "field8-option2": "Biết thông qua các Câu lạc bộ/Đội/Nhóm Sinh viên",
    "field8-option3": "Được bạn bè giới thiệu",
    "field8-option4": "Email Marketing",
    "field8-option5": "Biết thông qua việc theo dõi các Giảng viên",
    "field8-option6": "Khác",
    "form-field9": "9. Bạn mong đợi điều gì khi tham gia khóa học V-IWW: Tối ưu Employer Branding & Talent Acquisition ?",
    "field9-holder": "Câu trả lời của bạn",
    "form-submit-btn": "Đăng ký",
    "requireNoti": "Thông tin bắt buộc",
    "foot-address-1": "Địa chỉ văn phóng",
    "address-1": "279 đường Hồng Bàng, Phường 11, Quận 5, Thành phố Hồ Chí Minh",
    "foot-address-2": "Trụ sở",
    "address-2": "C9, Đường N2, KDC Jamono Golden Silk, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh",
    "foot-time": "Thời gian làm việc",
    "foot-time-des": "Thứ Hai đến Chủ Nhật",
    "foot-contact": "Tư vấn miễn phí",
    "foot-contact-1": "Giám đốc điều hành",
    "foot-contact-2": "Trường phòng Quan hệ Khách hàng",
    "foot-social": "Hệ thống kênh"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://courses.vcogroup.vn");
const $$LayoutFirstPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LayoutFirstPage;
  const lang = getLangFromUrl(Astro2.url);
  const { class: clazz } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", ` dir="ltr"> <head><meta charset="utf-8"><!-- Meta Tags --><meta name="description" content="VCO GROUP is a company specializing in young talents solutions consultancy & delivery for enterprises and education. VCO GROUP is proud of being a crucial part of partners' success and globalization"><meta name="keywords" content="career, recruitment, recruitment marketing, talents, education, talent program, consulting, training, event, workshop, communication, agency, fresher program, internship, sales"><meta name="author" content="VCOGROUP"><!-- Viewport Meta--><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><!-- Template Favicon & Icons Start --><link rel="icon" href="/img/logo/vco-logo.png" type="image/x-icon"><link rel="apple-touch-icon" href="/img/logo/vco-logo.png"><link rel="shortcut icon" href="/img/logo/vco-logo.png" type="image/x-icon"><!-- Template Favicon & Icons End --><!-- Facebook Metadata Start --><meta property="og:image:height" content="1200"><meta property="og:image:width" content="1200"><meta property="og:title" content="VCOGROUP"><meta property="og:description" content="VCO GROUP is a company specializing in young talents solutions consultancy & delivery for enterprises and education. VCO GROUP is proud of being a crucial part of partners' success and globalization"><!-- Facebook Metadata End --><!-- Template Styles Start --><link rel="stylesheet" type="text/css" href="/assets/plugins-demo.css"><link rel="stylesheet" type="text/css" href="/assets/bootstrap.css"><link rel="stylesheet" type="text/css" href="/assets/main-demo.css"><!-- Template Styles End --><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"><!-- Custom Browser Color Start --><meta name="theme-color" content="#ec1c14"><meta name="msapplication-navbutton-color" content="#ededed"><meta name="apple-mobile-web-app-status-bar-style" content="#ededed"><!-- Page Title --><title>VCO GROUP - Your Trusted Partner for Business Solutions </title><script async src="https://www.googletagmanager.com/gtag/js?id=G-RS6312RHY5"><\/script><script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-RS6312RHY5');
    <\/script><script>
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    <\/script><!-- Custom Browser Color End -->`, "</head> <body", "> ", " ", " </body></html>"])), addAttribute(lang, "lang"), renderHead(), addAttribute([
    //
    clazz,
    "bg-zinc-50 dark:bg-black",
    "scrollbar scrollbar-w-3 scrollbar-thumb-rounded-[0.25rem]",
    "scrollbar-track-slate-200  scrollbar-thumb-gray-400",
    "dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-700"
  ], "class:list"), renderSlot($$result, $$slots["default"]), renderScript($$result, "D:/vco2024/web/astro-node/src/app/LayoutFirstPage.astro?astro&type=script&index=0&lang.ts"));
}, "D:/vco2024/web/astro-node/src/app/LayoutFirstPage.astro", void 0);

const $$Astro$1 = createAstro("https://courses.vcogroup.vn");
const $$FirstPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FirstPage;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="demo__header bg-transparent"> <div class="d-flex justify-content-between align-items-center"> <a class="header__logo me-4 d-flex align-items-center" href="./"> <img src="/img/logo/VCO_H.png" alt="VCOGROUP Logo"> </a> <div class="header__content d-flex align-items-center w-100"> <div class="container-fluid px-0 fullheight-mobile"> <div class="row gx-0 justify-content-between align-items-center fullheight-mobile"> <div class="col-auto"> <div class="header__buttons d-flex justify-content-end"> <a class="btn btn-s btn-s-icon d-flex align-items-center btn-active btn-nav" id="home-nav" onclick="filterContent('home-nav')">
Home
</a> <a class="btn btn-s btn-s-icon d-flex align-items-center btn-2 btn-nav" id="portfolio-nav" href="portfolio" onclick="filterContent('portfolio-nav')">
Portfolio
</a> <a class="btn btn-s btn-s-icon d-flex align-items-center btn-2 btn-nav" id="solutions-nav" onclick="filterContent('solutions-nav')">
Solutions
</a> <a class="btn btn-s btn-s-icon d-flex align-items-center btn-2 btn-nav" id="testimonial-nav" onclick="filterContent('testimonial-nav')">
Testimonials
</a> <a class="btn btn-s btn-s-icon d-flex align-items-center btn-2 btn-nav" id="career-nav" href="career" onclick="filterContent('career-nav')">
Careers
</a> <a class="btn btn-s btn-s-icon d-flex align-items-center btn-2 btn-nav" id="career-nav" href="viww-agile-thingking">
Workshops
</a> </div> </div> </div> </div> </div> <a class="btn btn-s btn-s-icon d-flex align-items-center ms-4 btn-contact justify-content-center" id="contact-nav" href="#contacts" onclick="filterContent('contact-nav')">
Contact
</a> </div> </header> <!-- Header End --> <!-- Demo Wrapper Start --> <div class="demo__wrapper"> <div class="demo__intro mb-3 d-flex content-nav portfolio-nav home-nav background-title"> <div class="intro__content col-12 d-flex align-items-center intro_bg" style="min-height: 550px"> <div class="intro__container" style="z-index: 1;"> <div class="container-fluid"> <div class="row gx-0"> <div class="col-8"> <div class="headline"> <h1 class="headline__title text-white text-title">Taylored EB & TA Solutions <br> We solve, You Win</h1> <p class="mb-5 text-secondary"><b>VIEW CAREER ON THE OTHER SIDE</b></p> <p class="mt-3 mb-5 text-white text-content">VCO GROUP is the strategic partner in young talents solutions consultancy & delivery for enterprises, being in charge of projects & vendors management. VCO GROUP is proud of being a crucial part of partners' success
                                    and globalization.</p> <p class="text-solution mb-4 chuthich"><b>* EB: Employer Branding, TA: Talent Acquisition</b> </p> <!-- Tags here --> </div> </div> </div> </div> </div> </div> <div class="overlay-linear"></div> <div class="container-album"> <div class="row gx-3 gy-3 align-items-stretch row-album-1"> <div class="image-container image-title-1"></div> <div class="image-container image-title-2"></div> <div class="image-container image-title-3"></div> <div class="image-container image-title-4"></div> <div class="image-container image-title-5"></div> <div class="image-container image-title-6"></div> <div class="image-container image-title-1"></div> <div class="image-container image-title-2"></div> <div class="image-container image-title-3"></div> <div class="image-container image-title-4"></div> <div class="image-container image-title-5"></div> <div class="image-container image-title-6"></div> </div> <div class="row gx-3 gy-3 align-items-stretch row-album-2"> <div class="image-container image-title-7"></div> <div class="image-container image-title-8"></div> <div class="image-container image-title-9"></div> <div class="image-container image-title-10"></div> <div class="image-container image-title-11"></div> <div class="image-container image-title-12"></div> <div class="image-container image-title-7"></div> <div class="image-container image-title-8"></div> <div class="image-container image-title-9"></div> <div class="image-container image-title-10"></div> <div class="image-container image-title-11"></div> <div class="image-container image-title-12"></div> </div> </div> </div> <div class="demo__intro mb-3 d-flex portfolio content-nav portfolio-nav home-nav"> <div class="intro__content col-lg-4 column-1 portfolio-title image-bg"> <div class="intro__container"> <div class="container-fluid"> <div class="row gx-0"> <div class="nav-portfolio" style="margin-top:-400px;" id="Portfolio"></div> <div class="col-12"> <div class="headline"> <h1 class="headline__title text-white"><b>100+</b></h1> <!-- <p class="text-white">Doanh nghiệp đối tác</p> --> <p class="text-solution text-white mb-3"><b>EB & TA Projects</b></p> <p class="text-solution text-white mb-3">in collaboration with Enterprises and Multinational Corporations (MNCs).</p> </div> </div> </div> </div> </div> </div> <div class="intro__content col-lg-8 column-2 portfolio-padding card__item"> <a class="intro__container" href="portfolio"></a><div class="headline"><a class="intro__container" href="portfolio"> <p class="caption__title mb-3"><b>Portfolio</b></p> <p class="text-solution mb-4">VCO has partnered with over 65 enterprises on more than 100 successful projects, emphasizing comprehensive EB & TA and sustainable program development to support our partners' global expansion.
</p> <img src="/img/demo/clients.png" class="clients-h"> <img src="/img/demo/clients-v.png" class="clients-v"> </a><div class="headline__btnholder d-flex"><a class="intro__container" href="portfolio"></a><a href="portfolio" class="btn-bottom anim-down scroll-to-preview"> <span class="circle"> <i class="circle__icon"> <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25"> <path fill="#393C44" d="M25,4.8V24v1h-1H3.8v-1h19.5L0,0.7L0.7,0L24,23.3V4.8H25z"></path> </svg> </i> </span> <span class="caption"> Explore now</span> </a> </div> </div> </div> </div> <!-- Intro End --> <!-- Subscribe Start --> <!-- <div class="demo__subscribe mb-3 content-nav solutions-nav home-nav" id="subscribe">

        <div class="subscribe__container border-radius-l">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="nav-solutions" style="margin-top:-200px;" id="Solutions"></div>
                    <div class="col-12 col-xl-6 subscribe__form">

                        <div class="subscribe__title">
                            <p class="title opposite text-white" style="font-weight:600">Our Solutions</p>
                            <p class="descr opposite text-white">VCO GROUP provides a wide-ranging young talents service, expertly addressing employers' hiring needs at low cost in Vietnam. This approach not only secures top young talents but also boosts brand visibility in a cost-effective
                                manner.
                            </p>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    </div> --> <div class="demo__subscribe mb-3 content-nav career-nav home-nav"> <div class="bg-secondary border-radius-l career-block"> <a class="container-fluid p-0"> <div class="row g-0"> <div class="nav-subscribe" style="margin-top:-200px;pointer-events:none;" id="Careers"></div> <div class="col-12 subscribe__form d-flex text-center justify-content-center"> <div class="subscribe__title" style="max-width: 700px;"> <p class="title opposite text-white" style="font-weight:700">Our Solutions</p> <p class="descr opposite text-white mb-2">VCO GROUP provides employers with a wide-ranging EB & TA solutions, focusing on addressing employers' hiring needs with efficiency. This approach not only brings employers top talents but also wide-spread the employers'
                                brands across Vietnam.
</p> <div class="btn-bottom anim-down scroll-to-preview justify-content-end btn-mobile"> <span class="circle border-white mini"> <i class="circle__icon text-white"><b> <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 25 25"> <path fill="#000" d="M25,4.8V24v1h-1H3.8v-1h19.5L0,0.7L0.7,0L24,23.3V4.8H25z"></path> </svg></b> </i> </span> </div> </div> </div> </div> </a> </div> </div> <!-- Subscribe End --> <section id="live-preview" class="demo__links first-section mb-3 content-nav solutions-nav home-nav"> <div class="links__card"> <div class="container-fluid p-0"> <div class="row gx-3 gy-3 align-items-stretch"> <div class="col-12 col-md-6 col-xxl-6"> <figure class="card__item border-radius-m"> <a class="card__image" href="portfolio"> <div class="image-solution image-1"></div> </a> </figure> </div> <div class="col-12 col-md-6 col-xxl-6 "> <div class="image-solution border-radius-m"> <figcaption class="card__caption"> <span class="rounded-tag opposite text-danger bg-white mb-5"><b>Our Solutions</b></span> <p class="caption__title text-white">V - Recruitment marketing</p> <p class="text-solution text-white mb-3">Solution objectives are attracting nationwide matched talents for the employer & widespread the employer brand through Management Trainee Programs, Talent Programs and Competitions. VCO GROUP commits to deliver the
                                    solution based on updated insight reports and detailed measurement system.
</p> <p class="caption__tags d-flex flex-wrap"> <span class="rounded-tag opposite text-white">Management Trainee</span> <span class="rounded-tag opposite text-white">Talent Program</span> <span class="rounded-tag opposite text-white">Fresher Program</span> <span class="rounded-tag opposite text-white">Sales Trainee Program</span> <span class="rounded-tag opposite text-white">Internship Program</span> <span class="rounded-tag opposite text-white">Business Competition</span> <span class="rounded-tag opposite text-white">Technical Competition</span> </p> <div class="headline__btnholder d-flex"> <a class="btn-bottom anim-down scroll-to-preview"> <span class="circle border-white"> <i class="circle__icon text-white"><b> <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25"> <path fill="#fff" d="M25,4.8V24v1h-1H3.8v-1h19.5L0,0.7L0.7,0L24,23.3V4.8H25z"></path> </svg></b> </i> </span> <span class="caption text-white"> Find out more</span> </a> </div> </figcaption> </div> </div> <div class="col-12 col-md-6 col-xxl-6 "> <div class="image-solution border-radius-m bg-2"> <figcaption class="card__caption"> <span class="rounded-tag opposite text-danger bg-white mb-5"><b>Our Solutions</b></span> <p class="caption__title text-white">V - EMPLOYER BRAND & TALENT PROGRAM SETUP</p> <p class="text-solution text-white mb-3">Solution objectives are coaching & consulting the employer to build the brand and suitable talent program for future employee pipeline and lower hiring cost with higher hiring quality. VCO GROUP commits to help the
                                    employer build the branding strategy aligning with business strategy and build the talent program from concept, selection mechanism, organizing & marketing each selection round to onboarding.
</p> <p class="caption__tags d-flex flex-wrap"> <span class="rounded-tag opposite text-white">Employer Value Proposition</span> <span class="rounded-tag opposite text-white">Employer Branding</span> <span class="rounded-tag opposite text-white">Employer Brand Activation</span> <span class="rounded-tag opposite text-white">Talent Program Setup</span> </p> <div class="headline__btnholder d-flex"> <a class="btn-bottom anim-down scroll-to-preview"> <span class="circle border-white"> <i class="circle__icon text-white"><b> <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25"> <path fill="#fff" d="M25,4.8V24v1h-1H3.8v-1h19.5L0,0.7L0.7,0L24,23.3V4.8H25z"></path> </svg></b> </i> </span> <span class="caption text-white"> Find out more</span> </a> </div> </figcaption> </div> </div> <div class="col-12 col-md-6 col-xxl-6"> <figure class="card__item border-radius-m"> <a class="card__image" href="portfolio"> <div class="image-solution image-3"></div> </a> </figure> </div> <div class="col-12 col-md-6 col-xxl-6"> <figure class="card__item border-radius-m"> <a class="card__image" href="portfolio"> <div class="image-solution image-2"></div> </a> </figure> </div> <div class="col-12 col-md-6 col-xxl-6 "> <div class="image-solution border-radius-m bg-3"> <figcaption class="card__caption"> <span class="rounded-tag opposite text-danger bg-white mb-5"><b>Our Solutions</b></span> <p class="caption__title text-white">V - In-house Corporate Training</p> <p class="text-solution text-white mb-3">Solution objective is helping the corporation solve its current/core problems and standardize its operation through training with assessment. VCO GROUP commits to tailor the training curriculum for each partner with
                                    the most updated & critical knowledge. Training with VCO GROUP is to solve the problem and mark an achievement in your career.
</p> <p class="caption__tags d-flex flex-wrap"> <span class="rounded-tag opposite text-white">Employer Branding</span> <span class="rounded-tag opposite text-white">Talent Acquisition</span> <span class="rounded-tag opposite text-white">Recruitment Marketing</span> <span class="rounded-tag opposite text-white">Business Developement </span> <span class="rounded-tag opposite text-white">Digital Transformation </span> <span class="rounded-tag opposite text-white">Opeartional Excellence </span> </p> <div class="headline__btnholder d-flex"> <a class="btn-bottom anim-down scroll-to-preview"> <span class="circle border-white"> <i class="circle__icon text-white"><b> <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25"> <path fill="#fff" d="M25,4.8V24v1h-1H3.8v-1h19.5L0,0.7L0.7,0L24,23.3V4.8H25z"></path> </svg></b> </i> </span> <span class="caption text-white"> Find out more</span> </a> </div> </figcaption> </div> </div> <div class="col-12 col-md-6 col-xxl-6 "> <div class="image-solution border-radius-m bg-5"> <figcaption class="card__caption"> <span class="rounded-tag opposite text-danger bg-white mb-5"><b>Our Solutions</b></span> <p class="caption__title text-white">V - EDUCATIONAL EVENT</p> <p class="text-solution text-white mb-3">Solution objective is helping employers shine or connect with top talents through professional events. VCO GROUP commits to operate the event with specific format distinguishing the employer from others. The event is
                                    also followed by widespread communication to enhance the employer brand.
</p> <p class="caption__tags d-flex flex-wrap"> <span class="rounded-tag opposite text-white">Networking</span> <span class="rounded-tag opposite text-white">Workshop</span> <span class="rounded-tag opposite text-white">Seminar</span> <span class="rounded-tag opposite text-white">Competition</span> <span class="rounded-tag opposite text-white">Product Launching</span> <span class="rounded-tag opposite text-white">Career Fair</span> <span class="rounded-tag opposite text-white">Conference</span> </p> <div class="headline__btnholder d-flex"> <a class="btn-bottom anim-down scroll-to-preview"> <span class="circle border-white"> <i class="circle__icon text-white"><b> <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25"> <path fill="#fff" d="M25,4.8V24v1h-1H3.8v-1h19.5L0,0.7L0.7,0L24,23.3V4.8H25z"></path> </svg></b> </i> </span> <span class="caption text-white"> Find out more</span> </a> </div> </figcaption> </div> </div> <div class="col-12 col-md-6 col-xxl-6"> <figure class="card__item border-radius-m"> <a class="card__image" href="portfolio"> <div class="image-solution image-5"></div> </a> </figure> </div> <div class="col-12 col-md-6 col-xxl-6"> <figure class="card__item border-radius-m"> <a class="card__image" href="portfolio"> <div class="image-solution image-4"></div> </a> </figure> </div> <div class="col-12 col-md-6 col-xxl-6 "> <div class="image-solution border-radius-m bg-4"> <figcaption class="card__caption"> <span class="rounded-tag opposite text-danger bg-white mb-5"><b>Our Solutions</b></span> <p class="caption__title text-white">V - Industrial Wisdom Workshop</p> <p class="text-solution text-white mb-3">Solution objective is providing young talents with the most critical career knowledge through direct training programs from seniors from big corporations. VCO GROUP commits to deliver high-quality knowledge, effective
                                    methods and in-depth information about the industries. The training curriculums are various from E-commerce, Marketing, Sales, HR or AI for business,...
</p> <p class="caption__tags d-flex flex-wrap"> <span class="rounded-tag opposite text-white">Career Upskill</span> <span class="rounded-tag opposite text-white">Career Reskill</span> <span class="rounded-tag opposite text-white">Career Wisdom</span> <span class="rounded-tag opposite text-white">Career Development </span> <span class="rounded-tag opposite text-white">Career Path </span> </p> <div class="headline__btnholder d-flex"> <a class="btn-bottom anim-down scroll-to-preview"> <span class="circle border-white"> <i class="circle__icon text-white"><b> <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25"> <path fill="#fff" d="M25,4.8V24v1h-1H3.8v-1h19.5L0,0.7L0.7,0L24,23.3V4.8H25z"></path> </svg></b> </i> </span> <span class="caption text-white"> Find out more</span> </a> </div> </figcaption> </div> </div> </div> </div> </div> </section> <section id="live-preview" class="demo__intro first-section portfolio mb-3 content-nav testimonial-nav home-nav"> <div class="container-fluid p-0"> <div class="row gx-3 gy-3 align-items-stretch"> <div class="col-12 col-lg-8 column-1"> <div class="swiper video"> <!-- Additional required wrapper --> <div class="swiper-wrapper"> <div class="swiper-slide split-slide"> <iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" class="slider-video" src="https://www.youtube.com/embed/Cke1MFFDfD8?enablejsapi=1&mute=0&showinfo=0&controls=1&start=0" allowscriptaccess="always" frameborder="0" allowfullscreen=""></iframe> </div> <div class="swiper-slide split-slide"> <iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" class="slider-video" src="https://www.youtube.com/embed/4w-Jazquw-M?enablejsapi=1&mute=0&showinfo=0&controls=1&start=0" allowscriptaccess="always" frameborder="0" allowfullscreen=""></iframe> </div> <div class="swiper-slide split-slide"> <iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" class="slider-video" src="https://www.youtube.com/embed/NIMQIkSZOMw?enablejsapi=1&mute=0&showinfo=0&controls=1&start=0" allowscriptaccess="always" frameborder="0" allowfullscreen=""></iframe> </div> <div class="swiper-slide split-slide"> <iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" class="slider-video" src="https://www.youtube.com/embed/wTZGXCX2NZA?enablejsapi=1&mute=0&showinfo=0&controls=1&start=0" allowscriptaccess="always" frameborder="0" allowfullscreen=""></iframe> </div> <div class="swiper-slide split-slide"> <iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" class="slider-video" src="https://www.youtube.com/embed/tjnwHVYI1IA?enablejsapi=1&mute=0&showinfo=0&controls=1&start=0" allowscriptaccess="always" frameborder="0" allowfullscreen=""></iframe> </div> </div> </div> </div> <div class="intro__content col-lg-4 bg-black ms-2 testimonial-pd"> <div class="intro__container image-bg bd-radius-3"> <div class="container-fluid"> <div class="row gx-0"> <div class="nav-testimonial" style="margin-top:-300px;pointer-events:none; " id="Testimonial"></div> <div class="col-12 "> <div class="headline"> <div class="swiper testimonial"> <!-- Additional required wrapper --> <div class="swiper-wrapper"> <div class="swiper-slide split-slide"> <span class="rounded-tag opposite text-black bg-white mb-4 mt-5"><b>Testimonial</b></span> <p class="caption__title text-white mb-5">L'oréal Vietnam</p> <p class="text-solution text-white mb-3">L'Oréal Vietnam, a long-standing partner of VCO GROUP, consistently sets challenging and creative tasks in communications. VCO GROUP takes pride in consistently excelling in meeting these demands.</p> </div> <div class="swiper-slide split-slide"> <span class="rounded-tag opposite text-black bg-white mb-4 mt-5"><b>Testimonial</b></span> <p class="caption__title text-white mb-5">Avery Dennison Vietnam</p> <p class="text-solution text-white mb-3">VCO GROUP and Avery Dennison successfully overcame recruitment challenges, transforming the perception of sales careers among young people nationwide. They achieved this by engaging with potential
                                                        candidates through departments proficient in multilingual communication, effectively promoting the industry's opportunities for growth and advancement.</p> </div> <div class="swiper-slide split-slide"> <span class="rounded-tag opposite text-black bg-white mb-4 mt-5"><b>Testimonial</b></span> <p class="caption__title text-white mb-5">FE Credit</p> <p class="text-solution text-white mb-3">FE Credit, facing difficult recruitment goals in its distinctive industry, has boosted its brand awareness in universities and achieved successful talent recruitment. This success is attributed to
                                                        VCO GROUP's creative communication strategies aimed at engaging young people.</p> </div> <div class="swiper-slide split-slide"> <span class="rounded-tag opposite text-black bg-white mb-4 mt-5"><b>Testimonial</b></span> <p class="caption__title text-white mb-5">Heineken Vietnam</p> <p class="text-solution text-white mb-3">Heineken Vietnam, in collaboration with VCO GROUP, has made significant strides in engaging young talent, offering them unique career opportunities across various countries, thereby extending its
                                                        reach both in Vietnam and internationally.</p> </div> <div class="swiper-slide split-slide"> <span class="rounded-tag opposite text-black bg-white mb-4 mt-5"><b>Testimonial</b></span> <p class="caption__title text-white mb-5">Schneider Electric</p> <p class="text-solution text-white mb-3">VCO GROUP successfully exceeded recruitment targets for Schneider Electric, a client focused on nurturing young engineering talents and pioneering engineering-focused start-up competitions in Vietnam.</p> </div> </div> </div> </div> </div> </div> </div> <div class="swiper-pagination split-slider-pagination-emeric d-flex align-items-center justify-content-center border-radius-m"></div> <!-- Navigation buttons --> <div class="swiper-button-prev split-slider-btn-emeric split-slider-btn-emeric-prev" onclick="pauseVideo()"> <span class="circle"></span> <i class="fa-solid fa-chevron-left"></i> </div> <div class="swiper-button-next split-slider-btn-emeric split-slider-btn-emeric-next" onclick="pauseVideo()"> <span class="circle"></span> <i class="fa-solid fa-chevron-right"></i> </div> </div> </div> </div> </div></section> <div class="intro__content col-12 py-5 !mt-20" style="background-color: transparent;"> <div class="intro__container"> <div class="container-fluid px-5"> <div class="flex flex-row gx-0 flex-wrap"> <div class="col-12 col-sm-6 col-md-8 flex flex-row flex-wrap"> <div class="col-12 col-lg-5 col-md-6 mb-4 pe-4"> <!-- Column 1 Content --> <span class="text-white text-jd">Office Address</span> <p class="text-jd mt-3 mb-4" style="color: #adb5bd !important">
279 Hong Bang Street, Ward 11, District 5, Ho Chi Minh City
</p> <span class="text-white text-jd">Headquarter Address</span> <p class="text-jd mt-3" style="color: #adb5bd !important">
C9, N2 Street, KDC Jamono Golden Silk, Tan Thuan Dong Ward, district 7, Ho Chi Minh City
</p> </div> <div class="col-12 col-lg-3 col-md-6 mb-4 mb-lg-0"> <!-- Column 1 Content --> <span class="text-white text-jd">Office time</span> <p class="text-jd mt-3" style="color: #adb5bd !important">
Monday to Sunday
</p> <p class="text-jd" style="color: #adb5bd !important">
09:00 - 20:00
</p> </div> <div class="col-12 col-lg-4 col-md-6 mb-4 mb-lg-0"> <!-- Column 1 Content --> <span class="text-white text-jd">Free Consultancy</span> <p class="text-jd mt-3 mb-4" style="color: #adb5bd !important">
0334.889.068 <br> Chief Executive Officer <br>Mr. Dũng Hoàng
</p> <p class="text-jd" style="color: #adb5bd !important">
0934.050.422 <br> Head of Partnership Success <br>Ms. Hà Nguyễn
</p> </div> </div> <div class="col-12 col-sm-4 col-md-3"> <span class="text-white text-jd">Social Media</span> <div class="icon-container d-flex mt-3 flex-column"> <a href="https://www.facebook.com/hoangtridungandpartners" target="_blank" class="px-4 btn btn-link btn-social-icon btn-outline-light me-3 d-flex align-items-center justify-content-left fb"> <i class="fab fa-facebook-f me-3"></i> <p class="text-jd">HTD & Partners</p> </a> <a href="https://www.facebook.com/vcogroup.talent" target="_blank" class="px-4 mt-3 btn btn-link btn-social-icon btn-outline-light me-3 d-flex align-items-center justify-content-left fb"> <i class="fab fa-facebook-f me-3"></i> <p class="text-jd">VCO GROUP</p> </a> <a href="https://www.facebook.com/vcogroup.career" target="_blank" class="px-4 mt-3 btn btn-link btn-social-icon btn-outline-light me-3 d-flex align-items-center justify-content-left fb"> <i class="fab fa-facebook-f me-3"></i> <p class="text-jd">VAR VAO VIEC</p> </a> <div class="icon-container d-flex mt-3 "> <a href="https://www.youtube.com/@Viewcareerontheotherside" target="_blank" class="btn btn-link btn-social-icon btn-outline-light me-3 d-flex align-items-center justify-content-center"> <i class="fab fa-youtube"></i> </a> <a href="https://www.linkedin.com/company/vco-group/" target="_blank" class="btn btn-link btn-social-icon btn-outline-light me-3 d-flex align-items-center justify-content-center"> <i class="fab fa-linkedin"></i> </a> </div> </div> <div class="icon-container d-flex mt-3"></div> </div> <div class="col-12 col-sm-2 col-md-1"> <img src="/logoH.svg" alt="VCOGROUP Logo"> </div> </div> </div> </div> </div> </div>`;
}, "D:/vco2024/web/astro-node/src/modules/FirstPage.astro", void 0);

const $$Astro = createAstro("https://courses.vcogroup.vn");
const $$RCEB = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RCEB;
  return renderTemplate`${renderComponent($$result, "LayoutFirstPage", $$LayoutFirstPage, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FirstPage", $$FirstPage, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/RC-EB.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/RC-EB.astro";
const $$url = "/RC-EB";

const RCEB = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RCEB,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FirstPage as $, RCEB as R, $$LayoutFirstPage as a, getLangFromUrl as g, useTranslations as u };
