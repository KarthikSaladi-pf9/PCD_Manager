export const colorClasses: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  red: "bg-red-600 hover:bg-red-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  yellow: "bg-yellow-600 hover:bg-yellow-700",
};

export const environmentOptions = [
  {
    value: "us-dev",
    label: "US Dev",
    tempusUrl: "https://tempus-dev.platform9.horse",
    customerSlackChannel: "https://platform9.slack.com/archives/C01E7254V9V",
    upgradeSlackChannel: "https://platform9.slack.com/archives/C01EJMAUXJ9",
    borkUrl: "https://bork.app.dev-pcd.platform9.com",
    type: "dev",
    domain: ".app.dev-pcd.platform9.com",
    cortexUrl: "https://pcd-dev.pf9cortex.platform9.net",
    cortex_user: "svc_cortex_pcd_dev",
  },
  {
    value: "us-qa",
    label: "US QA",
    tempusUrl: "https://tempus-dev.platform9.horse",
    customerSlackChannel: "https://platform9.slack.com/archives/C08G0RZG1A6",
    upgradeSlackChannel: "https://platform9.slack.com/archives/C08FK7WTR0X",
    borkUrl: "https://bork.app.qa-pcd.platform9.com",
    type: "qa",
    domain: ".app.qa-pcd.platform9.com",
    cortexUrl: "https://pcd-qa.pf9cortex.platform9.net",
    cortex_user: "svc_cortex_pcd_qa",
  },
  {
    value: "us-stage",
    label: "US Stage",
    tempusUrl: "https://tempus-prod.platform9.horse",
    customerSlackChannel: "https://platform9.slack.com/archives/C08GP881QSC",
    upgradeSlackChannel: "https://platform9.slack.com/archives/C08FSJS3LQN",
    borkUrl: "https://bork.app.staging-pcd.platform9.com",
    type: "stage",
    domain: ".app.staging-pcd.platform9.com",
    cortexUrl: "https://pcd-staging.pf9cortex.platform9.net",
    cortex_user: "svc_cortex_pcd_staging",
  },
  {
    value: "eu-stage",
    label: "EU Stage",
    tempusUrl: "https://tempus-prod.platform9.horse",
    customerSlackChannel: "https://platform9.slack.com/archives/C08GP881QSC",
    upgradeSlackChannel: "https://platform9.slack.com/archives/C08FSJS3LQN",
    borkUrl: "https://bork.eu-central-1.app.staging-pcd.platform9.com",
    type: "stage",
    domain: ".app.staging-pcd.platform9.com",
    cortexUrl: "https://pcd-staging.pf9cortex.platform9.net",
    cortex_user: "svc_cortex_pcd_staging",
  },
  {
    value: "ap-stage",
    label: "AP Stage",
    tempusUrl: "https://tempus-prod.platform9.horse",
    customerSlackChannel: "https://platform9.slack.com/archives/C08GP881QSC",
    upgradeSlackChannel: "https://platform9.slack.com/archives/C08FSJS3LQN",
    borkUrl: "https://bork.ap-south-1.app.staging-pcd.platform9.com",
    type: "stage",
    domain: ".app.staging-pcd.platform9.com",
    cortexUrl: "https://pcd-staging.pf9cortex.platform9.net",
    cortex_user: "svc_cortex_pcd_staging",
  },
  {
    value: "us-prod",
    label: "US Prod",
    tempusUrl: "https://tempus-prod.platform9.horse",
    customerSlackChannel: "https://platform9.slack.com/archives/C037R987G",
    upgradeSlackChannel: "https://platform9.slack.com/archives/C0FNQHD52",
    borkUrl: "https://bork.app.pcd.platform9.com",
    type: "prod",
    domain: ".app.pcd.platform9.com",
    cortexUrl: "https://pcd-prod.pf9cortex.platform9.net",
    cortex_user: "svc_cortex_pcd_prod",
  },
  {
    value: "eu-prod",
    label: "EU Prod",
    tempusUrl: "https://tempus-prod.platform9.horse",
    customerSlackChannel: "https://platform9.slack.com/archives/C037R987G",
    upgradeSlackChannel: "https://platform9.slack.com/archives/C0FNQHD52",
    borkUrl: "https://bork.eu-central-1.app.pcd.platform9.com",
    type: "prod",
    domain: ".app.pcd.platform9.com",
    cortexUrl: "https://pcd-prod.pf9cortex.platform9.net",
    cortex_user: "svc_cortex_pcd_prod",
  },
  {
    value: "ap-prod",
    label: "AP Prod",
    tempusUrl: "https://tempus-prod.platform9.horse",
    customerSlackChannel: "https://platform9.slack.com/archives/C037R987G",
    upgradeSlackChannel: "https://platform9.slack.com/archives/C0FNQHD52",
    borkUrl: "https://bork.ap-south-1.app.pcd.platform9.com",
    type: "prod",
    domain: ".app.pcd.platform9.com",
    cortexUrl: "https://pcd-prod.pf9cortex.platform9.net",
    cortex_user: "svc_cortex_pcd_prod",
  },
];

export const dbBackendOptions = [
  { value: "mysql", label: "Local MySQL", isDefault: true },
];

export const tempusUrl = "https://tempus-prod.platform9.horse/api/v1/releases";

export const tagColors = [
  "bg-red-100 text-red-800",
  "bg-green-100 text-green-800",
  "bg-blue-100 text-blue-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-indigo-100 text-indigo-800",
  "bg-teal-100 text-teal-800",
  "bg-orange-100 text-orange-800",
];

export const Tag_suggestions = [
  "Reproducer",
  "Sales",
  "DevOps",
  "SA",
  "SRE",
  "QA",
  "Dev",
  "Develop",
  "Delete",
  "Don't Delete",
  "Marketing",
  "Support",
  "POC",
  "Test Environment",
  "PCD-V",
  "PCD-K",
  "Training",
];

export const CHARTS_CACHE_TTL = 60 * 60 * 1000;

export const log = {
  info: (msg: string) =>
    console.log(`[INFO] ${new Date().toISOString()} ${msg}`),
  warn: (msg: string) =>
    console.warn(`[WARN] ${new Date().toISOString()} ${msg}`),
  error: (msg: string) =>
    console.error(`[ERROR] ${new Date().toISOString()} ${msg}`),
  success: (msg: string) =>
    console.log(`[SUCCESS] ${new Date().toISOString()} ${msg}`),
};

export const broadCastSlackID = "C0935NGUC6B";
