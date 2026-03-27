export type Lang = "ko" | "en"

export interface TableRow { label: string; value: string }
export interface ListItem { label: string; desc: string }
export interface Contact { name: string; email: string; note: string }

export interface Section {
  id: string
  title: string
  content?: string
  table?: TableRow[]
  list?: ListItem[]
  contact?: Contact
  date?: string
}

export interface UI {
  badge: string
  heading: string
  subtitle: string
  department: string
  email: string
  loginButton: string
  copyright: string
}

export const sections: Record<Lang, Section[]> = {
  ko: [
    {
      id: "overview",
      title: "개요",
      content:
        "본 개인정보처리방침은 PVPARENA(이하 '회사')가 제공하는 서비스를 이용하는 회원의 개인정보를 보호하기 위해 어떠한 조치를 취하고 있는지를 설명합니다. 회사는 「개인정보 보호법」 등 관련 법령을 준수하며, 회원의 개인정보가 안전하게 관리될 수 있도록 최선을 다하고 있습니다.",
    },
    {
      id: "collection",
      title: "데이터 수집",
      table: [
        { label: "수집 항목", value: "이메일, 닉네임, 비밀번호(암호화), 프로필 이미지" },
        { label: "수집 목적", value: "회원 식별, 서비스 제공, 고객 지원" },
        { label: "보유 기간", value: "회원 탈퇴 시까지 (법령에 따라 일부 정보는 일정 기간 보관)" },
        { label: "수집 방법", value: "회원가입 시 직접 입력, 서비스 이용 과정에서 자동 수집" },
      ],
    },
    {
      id: "rights",
      title: "사용자 권리",
      list: [
        { label: "열람 요청", desc: "회원은 자신의 개인정보에 대해 열람을 요청할 수 있습니다." },
        { label: "수정 요청", desc: "부정확한 개인정보에 대해 정정을 요청할 수 있습니다." },
        { label: "삭제 요청 (GDPR/CCPA)", desc: "관련 법령에 따라 개인정보 삭제를 요청할 수 있습니다." },
        { label: "처리정지 요청", desc: "개인정보의 처리 정지를 요청할 수 있습니다." },
        { label: "동의 철회", desc: "이전에 제공한 동의를 언제든지 철회할 수 있습니다." },
      ],
    },
    {
      id: "thirdparty",
      title: "제3자 제공",
      content: "회사는 원칙적으로 회원의 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.",
      list: [
        { label: "법적 요구", desc: "법령에 의거하거나, 수사기관의 요청이 있는 경우" },
        { label: "동의", desc: "회원이 사전에 제3자 제공에 동의한 경우" },
        { label: "위탁 처리", desc: "서비스 제공을 위해 필요한 범위 내에서 업무 위탁 시" },
      ],
    },
    {
      id: "cookie",
      title: "쿠키 및 추적 기술",
      content:
        "회사는 서비스 개선 및 맞춤형 서비스를 제공하기 위해 쿠키(Cookie) 및 유사 기술을 사용할 수 있습니다. 회원은 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으며, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.",
    },
    {
      id: "security",
      title: "보안 조치",
      list: [
        { label: "암호화", desc: "비밀번호 등 민감정보는 암호화하여 저장합니다." },
        { label: "접근 제한", desc: "개인정보 처리 시스템에 대한 접근 권한을 최소화합니다." },
        { label: "보안 프로그램", desc: "해킹 등에 대비한 보안 프로그램을 설치·운영합니다." },
        { label: "정기 점검", desc: "개인정보 보호를 위한 내부 점검을 정기적으로 실시합니다." },
      ],
    },
    {
      id: "manager",
      title: "개인정보 보호책임자",
      contact: {
        name: "PVPARENA 개인정보보호팀",
        email: "jojeonghaeng@gmail.com",
        note: "개인정보 관련 문의사항이 있으시면 위 연락처로 문의해 주시기 바랍니다.",
      },
    },
    {
      id: "changes",
      title: "방침 변경",
      content:
        "본 개인정보처리방침은 관련 법령 및 내부 정책 변경에 따라 수정될 수 있습니다. 변경 사항이 있을 경우 서비스 내 공지를 통해 안내드리겠습니다.",
      date: "시행일자: 2026년 1월 1일",
    },
  ],
  en: [
    {
      id: "overview",
      title: "Overview",
      content:
        "This Privacy Policy explains the measures PVPARENA (hereinafter referred to as 'the Company') takes to protect the personal information of members who use our services. The Company complies with applicable laws, including the Personal Information Protection Act, and strives to ensure the safe management of members' personal information.",
    },
    {
      id: "collection",
      title: "Data Collection",
      table: [
        { label: "Items Collected", value: "Email, Nickname, Password (encrypted), Profile Image" },
        { label: "Purpose", value: "Member identification, Service delivery, Customer support" },
        { label: "Retention Period", value: "Until account deletion (some data retained per legal requirements)" },
        { label: "Collection Method", value: "Direct input during registration, Automatic collection during service use" },
      ],
    },
    {
      id: "rights",
      title: "User Rights",
      list: [
        { label: "Access Request", desc: "You may request access to your personal information." },
        { label: "Correction Request", desc: "You may request correction of inaccurate personal information." },
        { label: "Deletion Request (GDPR/CCPA)", desc: "You may request deletion of your personal information under applicable laws." },
        { label: "Processing Suspension", desc: "You may request suspension of personal information processing." },
        { label: "Withdraw Consent", desc: "You may withdraw previously given consent at any time." },
      ],
    },
    {
      id: "thirdparty",
      title: "Third-Party Disclosure",
      content: "The Company does not, in principle, disclose members' personal information to third parties. However, exceptions are made in the following cases:",
      list: [
        { label: "Legal Requirements", desc: "When required by law or requested by investigative authorities" },
        { label: "Consent", desc: "When the member has given prior consent to third-party disclosure" },
        { label: "Outsourced Processing", desc: "When necessary for service delivery within the scope of outsourced operations" },
      ],
    },
    {
      id: "cookie",
      title: "Cookies & Tracking",
      content:
        "The Company may use cookies and similar technologies to improve services and provide personalized experiences. You may refuse cookie storage through your browser settings, though this may limit some service features.",
    },
    {
      id: "security",
      title: "Security Measures",
      list: [
        { label: "Encryption", desc: "Sensitive information such as passwords is encrypted before storage." },
        { label: "Access Control", desc: "Access to personal information processing systems is minimized." },
        { label: "Security Software", desc: "Security programs are installed and operated against hacking and threats." },
        { label: "Regular Audits", desc: "Internal audits for personal information protection are conducted regularly." },
      ],
    },
    {
      id: "manager",
      title: "Privacy Officer",
      contact: {
        name: "PVPARENA Privacy Team",
        email: "jojeonghaeng@gmail.com",
        note: "For any inquiries regarding personal information, please contact us using the information above.",
      },
    },
    {
      id: "changes",
      title: "Policy Changes",
      content:
        "This Privacy Policy may be amended in accordance with changes to applicable laws or internal policies. Any changes will be announced through in-service notifications.",
      date: "Effective Date: January 1, 2026",
    },
  ],
}

export const ui: Record<Lang, UI> = {
  ko: {
    badge: "개인정보 보호",
    heading: "개인정보처리방침",
    subtitle: "귀하의 개인정보는 소중하게 관리됩니다. 아래 내용을 확인하시고, PVPARENA가 어떻게 데이터를 수집·이용·보호하는지 확인해 주시기 바랍니다.",
    department: "담당부서",
    email: "이메일",
    loginButton: "로그인",
    copyright: "© 2026 PVPARENA. All rights reserved. 본 방침에 대한 문의는 jojeonghaeng@gmail.com 으로 연락해 주세요.",
  },
  en: {
    badge: "Privacy Protection",
    heading: "Privacy Policy",
    subtitle: "Your personal information is carefully managed. Please review the following to understand how PVPARENA collects, uses, and protects your data.",
    department: "Department",
    email: "Email",
    loginButton: "Log in",
    copyright: "© 2026 PVPARENA. All rights reserved. For inquiries about this policy, please contact jojeonghaeng@gmail.com.",
  },
}
