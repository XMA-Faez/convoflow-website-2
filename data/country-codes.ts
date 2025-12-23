export interface CountryCode {
  name: string;
  iso: string;
  dialCode: string;
  flag: string;
  minLength: number;
  maxLength: number;
}

function isoToFlag(iso: string): string {
  const codePoints = iso
    .toUpperCase()
    .split("")
    .map((char) => 0x1f1e6 + char.charCodeAt(0) - 65);
  return String.fromCodePoint(...codePoints);
}

export const countryCodes: CountryCode[] = [
  { name: "United Arab Emirates", iso: "AE", dialCode: "+971", flag: isoToFlag("AE"), minLength: 9, maxLength: 9 },
  { name: "Saudi Arabia", iso: "SA", dialCode: "+966", flag: isoToFlag("SA"), minLength: 9, maxLength: 9 },
  { name: "Qatar", iso: "QA", dialCode: "+974", flag: isoToFlag("QA"), minLength: 8, maxLength: 8 },
  { name: "Kuwait", iso: "KW", dialCode: "+965", flag: isoToFlag("KW"), minLength: 8, maxLength: 8 },
  { name: "Bahrain", iso: "BH", dialCode: "+973", flag: isoToFlag("BH"), minLength: 8, maxLength: 8 },
  { name: "Oman", iso: "OM", dialCode: "+968", flag: isoToFlag("OM"), minLength: 8, maxLength: 8 },
  { name: "Afghanistan", iso: "AF", dialCode: "+93", flag: isoToFlag("AF"), minLength: 9, maxLength: 9 },
  { name: "Aland Islands", iso: "AX", dialCode: "+358", flag: isoToFlag("AX"), minLength: 7, maxLength: 12 },
  { name: "Albania", iso: "AL", dialCode: "+355", flag: isoToFlag("AL"), minLength: 9, maxLength: 9 },
  { name: "Algeria", iso: "DZ", dialCode: "+213", flag: isoToFlag("DZ"), minLength: 9, maxLength: 9 },
  { name: "American Samoa", iso: "AS", dialCode: "+1684", flag: isoToFlag("AS"), minLength: 7, maxLength: 7 },
  { name: "Andorra", iso: "AD", dialCode: "+376", flag: isoToFlag("AD"), minLength: 6, maxLength: 9 },
  { name: "Angola", iso: "AO", dialCode: "+244", flag: isoToFlag("AO"), minLength: 9, maxLength: 9 },
  { name: "Anguilla", iso: "AI", dialCode: "+1264", flag: isoToFlag("AI"), minLength: 7, maxLength: 7 },
  { name: "Antarctica", iso: "AQ", dialCode: "+672", flag: isoToFlag("AQ"), minLength: 6, maxLength: 6 },
  { name: "Antigua and Barbuda", iso: "AG", dialCode: "+1268", flag: isoToFlag("AG"), minLength: 7, maxLength: 7 },
  { name: "Argentina", iso: "AR", dialCode: "+54", flag: isoToFlag("AR"), minLength: 10, maxLength: 10 },
  { name: "Armenia", iso: "AM", dialCode: "+374", flag: isoToFlag("AM"), minLength: 8, maxLength: 8 },
  { name: "Aruba", iso: "AW", dialCode: "+297", flag: isoToFlag("AW"), minLength: 7, maxLength: 7 },
  { name: "Australia", iso: "AU", dialCode: "+61", flag: isoToFlag("AU"), minLength: 9, maxLength: 9 },
  { name: "Austria", iso: "AT", dialCode: "+43", flag: isoToFlag("AT"), minLength: 10, maxLength: 13 },
  { name: "Azerbaijan", iso: "AZ", dialCode: "+994", flag: isoToFlag("AZ"), minLength: 9, maxLength: 9 },
  { name: "Bahamas", iso: "BS", dialCode: "+1242", flag: isoToFlag("BS"), minLength: 7, maxLength: 7 },
  { name: "Bangladesh", iso: "BD", dialCode: "+880", flag: isoToFlag("BD"), minLength: 10, maxLength: 10 },
  { name: "Barbados", iso: "BB", dialCode: "+1246", flag: isoToFlag("BB"), minLength: 7, maxLength: 7 },
  { name: "Belarus", iso: "BY", dialCode: "+375", flag: isoToFlag("BY"), minLength: 9, maxLength: 9 },
  { name: "Belgium", iso: "BE", dialCode: "+32", flag: isoToFlag("BE"), minLength: 9, maxLength: 9 },
  { name: "Belize", iso: "BZ", dialCode: "+501", flag: isoToFlag("BZ"), minLength: 7, maxLength: 7 },
  { name: "Benin", iso: "BJ", dialCode: "+229", flag: isoToFlag("BJ"), minLength: 8, maxLength: 8 },
  { name: "Bermuda", iso: "BM", dialCode: "+1441", flag: isoToFlag("BM"), minLength: 7, maxLength: 7 },
  { name: "Bhutan", iso: "BT", dialCode: "+975", flag: isoToFlag("BT"), minLength: 8, maxLength: 8 },
  { name: "Bolivia", iso: "BO", dialCode: "+591", flag: isoToFlag("BO"), minLength: 8, maxLength: 8 },
  { name: "Bosnia and Herzegovina", iso: "BA", dialCode: "+387", flag: isoToFlag("BA"), minLength: 8, maxLength: 8 },
  { name: "Botswana", iso: "BW", dialCode: "+267", flag: isoToFlag("BW"), minLength: 7, maxLength: 8 },
  { name: "Brazil", iso: "BR", dialCode: "+55", flag: isoToFlag("BR"), minLength: 10, maxLength: 11 },
  { name: "British Indian Ocean Territory", iso: "IO", dialCode: "+246", flag: isoToFlag("IO"), minLength: 7, maxLength: 7 },
  { name: "Brunei", iso: "BN", dialCode: "+673", flag: isoToFlag("BN"), minLength: 7, maxLength: 7 },
  { name: "Bulgaria", iso: "BG", dialCode: "+359", flag: isoToFlag("BG"), minLength: 9, maxLength: 9 },
  { name: "Burkina Faso", iso: "BF", dialCode: "+226", flag: isoToFlag("BF"), minLength: 8, maxLength: 8 },
  { name: "Burundi", iso: "BI", dialCode: "+257", flag: isoToFlag("BI"), minLength: 8, maxLength: 8 },
  { name: "Cambodia", iso: "KH", dialCode: "+855", flag: isoToFlag("KH"), minLength: 8, maxLength: 9 },
  { name: "Cameroon", iso: "CM", dialCode: "+237", flag: isoToFlag("CM"), minLength: 9, maxLength: 9 },
  { name: "Canada", iso: "CA", dialCode: "+1", flag: isoToFlag("CA"), minLength: 10, maxLength: 10 },
  { name: "Cape Verde", iso: "CV", dialCode: "+238", flag: isoToFlag("CV"), minLength: 7, maxLength: 7 },
  { name: "Cayman Islands", iso: "KY", dialCode: "+345", flag: isoToFlag("KY"), minLength: 7, maxLength: 7 },
  { name: "Central African Republic", iso: "CF", dialCode: "+236", flag: isoToFlag("CF"), minLength: 8, maxLength: 8 },
  { name: "Chad", iso: "TD", dialCode: "+235", flag: isoToFlag("TD"), minLength: 8, maxLength: 8 },
  { name: "Chile", iso: "CL", dialCode: "+56", flag: isoToFlag("CL"), minLength: 9, maxLength: 9 },
  { name: "China", iso: "CN", dialCode: "+86", flag: isoToFlag("CN"), minLength: 11, maxLength: 11 },
  { name: "Christmas Island", iso: "CX", dialCode: "+61", flag: isoToFlag("CX"), minLength: 9, maxLength: 9 },
  { name: "Cocos (Keeling) Islands", iso: "CC", dialCode: "+61", flag: isoToFlag("CC"), minLength: 9, maxLength: 9 },
  { name: "Colombia", iso: "CO", dialCode: "+57", flag: isoToFlag("CO"), minLength: 10, maxLength: 10 },
  { name: "Comoros", iso: "KM", dialCode: "+269", flag: isoToFlag("KM"), minLength: 7, maxLength: 7 },
  { name: "Congo", iso: "CG", dialCode: "+242", flag: isoToFlag("CG"), minLength: 9, maxLength: 9 },
  { name: "Congo (DRC)", iso: "CD", dialCode: "+243", flag: isoToFlag("CD"), minLength: 9, maxLength: 9 },
  { name: "Cook Islands", iso: "CK", dialCode: "+682", flag: isoToFlag("CK"), minLength: 5, maxLength: 5 },
  { name: "Costa Rica", iso: "CR", dialCode: "+506", flag: isoToFlag("CR"), minLength: 8, maxLength: 8 },
  { name: "Cote d'Ivoire", iso: "CI", dialCode: "+225", flag: isoToFlag("CI"), minLength: 10, maxLength: 10 },
  { name: "Croatia", iso: "HR", dialCode: "+385", flag: isoToFlag("HR"), minLength: 9, maxLength: 9 },
  { name: "Cuba", iso: "CU", dialCode: "+53", flag: isoToFlag("CU"), minLength: 8, maxLength: 8 },
  { name: "Cyprus", iso: "CY", dialCode: "+357", flag: isoToFlag("CY"), minLength: 8, maxLength: 8 },
  { name: "Czech Republic", iso: "CZ", dialCode: "+420", flag: isoToFlag("CZ"), minLength: 9, maxLength: 9 },
  { name: "Denmark", iso: "DK", dialCode: "+45", flag: isoToFlag("DK"), minLength: 8, maxLength: 8 },
  { name: "Djibouti", iso: "DJ", dialCode: "+253", flag: isoToFlag("DJ"), minLength: 8, maxLength: 8 },
  { name: "Dominica", iso: "DM", dialCode: "+1767", flag: isoToFlag("DM"), minLength: 7, maxLength: 7 },
  { name: "Dominican Republic", iso: "DO", dialCode: "+1849", flag: isoToFlag("DO"), minLength: 7, maxLength: 7 },
  { name: "Ecuador", iso: "EC", dialCode: "+593", flag: isoToFlag("EC"), minLength: 9, maxLength: 9 },
  { name: "Egypt", iso: "EG", dialCode: "+20", flag: isoToFlag("EG"), minLength: 10, maxLength: 10 },
  { name: "El Salvador", iso: "SV", dialCode: "+503", flag: isoToFlag("SV"), minLength: 8, maxLength: 8 },
  { name: "Equatorial Guinea", iso: "GQ", dialCode: "+240", flag: isoToFlag("GQ"), minLength: 9, maxLength: 9 },
  { name: "Eritrea", iso: "ER", dialCode: "+291", flag: isoToFlag("ER"), minLength: 7, maxLength: 7 },
  { name: "Estonia", iso: "EE", dialCode: "+372", flag: isoToFlag("EE"), minLength: 7, maxLength: 8 },
  { name: "Ethiopia", iso: "ET", dialCode: "+251", flag: isoToFlag("ET"), minLength: 9, maxLength: 9 },
  { name: "Falkland Islands", iso: "FK", dialCode: "+500", flag: isoToFlag("FK"), minLength: 5, maxLength: 5 },
  { name: "Faroe Islands", iso: "FO", dialCode: "+298", flag: isoToFlag("FO"), minLength: 6, maxLength: 6 },
  { name: "Fiji", iso: "FJ", dialCode: "+679", flag: isoToFlag("FJ"), minLength: 7, maxLength: 7 },
  { name: "Finland", iso: "FI", dialCode: "+358", flag: isoToFlag("FI"), minLength: 9, maxLength: 11 },
  { name: "France", iso: "FR", dialCode: "+33", flag: isoToFlag("FR"), minLength: 9, maxLength: 9 },
  { name: "French Guiana", iso: "GF", dialCode: "+594", flag: isoToFlag("GF"), minLength: 9, maxLength: 9 },
  { name: "French Polynesia", iso: "PF", dialCode: "+689", flag: isoToFlag("PF"), minLength: 6, maxLength: 6 },
  { name: "Gabon", iso: "GA", dialCode: "+241", flag: isoToFlag("GA"), minLength: 7, maxLength: 8 },
  { name: "Gambia", iso: "GM", dialCode: "+220", flag: isoToFlag("GM"), minLength: 7, maxLength: 7 },
  { name: "Georgia", iso: "GE", dialCode: "+995", flag: isoToFlag("GE"), minLength: 9, maxLength: 9 },
  { name: "Germany", iso: "DE", dialCode: "+49", flag: isoToFlag("DE"), minLength: 10, maxLength: 11 },
  { name: "Ghana", iso: "GH", dialCode: "+233", flag: isoToFlag("GH"), minLength: 9, maxLength: 9 },
  { name: "Gibraltar", iso: "GI", dialCode: "+350", flag: isoToFlag("GI"), minLength: 8, maxLength: 8 },
  { name: "Greece", iso: "GR", dialCode: "+30", flag: isoToFlag("GR"), minLength: 10, maxLength: 10 },
  { name: "Greenland", iso: "GL", dialCode: "+299", flag: isoToFlag("GL"), minLength: 6, maxLength: 6 },
  { name: "Grenada", iso: "GD", dialCode: "+1473", flag: isoToFlag("GD"), minLength: 7, maxLength: 7 },
  { name: "Guadeloupe", iso: "GP", dialCode: "+590", flag: isoToFlag("GP"), minLength: 9, maxLength: 9 },
  { name: "Guam", iso: "GU", dialCode: "+1671", flag: isoToFlag("GU"), minLength: 7, maxLength: 7 },
  { name: "Guatemala", iso: "GT", dialCode: "+502", flag: isoToFlag("GT"), minLength: 8, maxLength: 8 },
  { name: "Guernsey", iso: "GG", dialCode: "+44", flag: isoToFlag("GG"), minLength: 10, maxLength: 10 },
  { name: "Guinea", iso: "GN", dialCode: "+224", flag: isoToFlag("GN"), minLength: 9, maxLength: 9 },
  { name: "Guinea-Bissau", iso: "GW", dialCode: "+245", flag: isoToFlag("GW"), minLength: 9, maxLength: 9 },
  { name: "Guyana", iso: "GY", dialCode: "+595", flag: isoToFlag("GY"), minLength: 7, maxLength: 7 },
  { name: "Haiti", iso: "HT", dialCode: "+509", flag: isoToFlag("HT"), minLength: 8, maxLength: 8 },
  { name: "Vatican City", iso: "VA", dialCode: "+379", flag: isoToFlag("VA"), minLength: 10, maxLength: 10 },
  { name: "Honduras", iso: "HN", dialCode: "+504", flag: isoToFlag("HN"), minLength: 8, maxLength: 8 },
  { name: "Hong Kong", iso: "HK", dialCode: "+852", flag: isoToFlag("HK"), minLength: 8, maxLength: 8 },
  { name: "Hungary", iso: "HU", dialCode: "+36", flag: isoToFlag("HU"), minLength: 9, maxLength: 9 },
  { name: "Iceland", iso: "IS", dialCode: "+354", flag: isoToFlag("IS"), minLength: 7, maxLength: 7 },
  { name: "India", iso: "IN", dialCode: "+91", flag: isoToFlag("IN"), minLength: 10, maxLength: 10 },
  { name: "Indonesia", iso: "ID", dialCode: "+62", flag: isoToFlag("ID"), minLength: 10, maxLength: 12 },
  { name: "Iran", iso: "IR", dialCode: "+98", flag: isoToFlag("IR"), minLength: 10, maxLength: 10 },
  { name: "Iraq", iso: "IQ", dialCode: "+964", flag: isoToFlag("IQ"), minLength: 10, maxLength: 10 },
  { name: "Ireland", iso: "IE", dialCode: "+353", flag: isoToFlag("IE"), minLength: 9, maxLength: 9 },
  { name: "Isle of Man", iso: "IM", dialCode: "+44", flag: isoToFlag("IM"), minLength: 10, maxLength: 10 },
  { name: "Israel", iso: "IL", dialCode: "+972", flag: isoToFlag("IL"), minLength: 9, maxLength: 9 },
  { name: "Italy", iso: "IT", dialCode: "+39", flag: isoToFlag("IT"), minLength: 10, maxLength: 10 },
  { name: "Jamaica", iso: "JM", dialCode: "+1876", flag: isoToFlag("JM"), minLength: 7, maxLength: 7 },
  { name: "Japan", iso: "JP", dialCode: "+81", flag: isoToFlag("JP"), minLength: 10, maxLength: 10 },
  { name: "Jersey", iso: "JE", dialCode: "+44", flag: isoToFlag("JE"), minLength: 10, maxLength: 10 },
  { name: "Jordan", iso: "JO", dialCode: "+962", flag: isoToFlag("JO"), minLength: 9, maxLength: 9 },
  { name: "Kazakhstan", iso: "KZ", dialCode: "+7", flag: isoToFlag("KZ"), minLength: 10, maxLength: 10 },
  { name: "Kenya", iso: "KE", dialCode: "+254", flag: isoToFlag("KE"), minLength: 9, maxLength: 9 },
  { name: "Kiribati", iso: "KI", dialCode: "+686", flag: isoToFlag("KI"), minLength: 5, maxLength: 5 },
  { name: "North Korea", iso: "KP", dialCode: "+850", flag: isoToFlag("KP"), minLength: 10, maxLength: 10 },
  { name: "South Korea", iso: "KR", dialCode: "+82", flag: isoToFlag("KR"), minLength: 9, maxLength: 10 },
  { name: "Kyrgyzstan", iso: "KG", dialCode: "+996", flag: isoToFlag("KG"), minLength: 9, maxLength: 9 },
  { name: "Laos", iso: "LA", dialCode: "+856", flag: isoToFlag("LA"), minLength: 9, maxLength: 10 },
  { name: "Latvia", iso: "LV", dialCode: "+371", flag: isoToFlag("LV"), minLength: 8, maxLength: 8 },
  { name: "Lebanon", iso: "LB", dialCode: "+961", flag: isoToFlag("LB"), minLength: 7, maxLength: 8 },
  { name: "Lesotho", iso: "LS", dialCode: "+266", flag: isoToFlag("LS"), minLength: 8, maxLength: 8 },
  { name: "Liberia", iso: "LR", dialCode: "+231", flag: isoToFlag("LR"), minLength: 7, maxLength: 9 },
  { name: "Libya", iso: "LY", dialCode: "+218", flag: isoToFlag("LY"), minLength: 9, maxLength: 9 },
  { name: "Liechtenstein", iso: "LI", dialCode: "+423", flag: isoToFlag("LI"), minLength: 7, maxLength: 7 },
  { name: "Lithuania", iso: "LT", dialCode: "+370", flag: isoToFlag("LT"), minLength: 8, maxLength: 8 },
  { name: "Luxembourg", iso: "LU", dialCode: "+352", flag: isoToFlag("LU"), minLength: 9, maxLength: 9 },
  { name: "Macao", iso: "MO", dialCode: "+853", flag: isoToFlag("MO"), minLength: 8, maxLength: 8 },
  { name: "Macedonia", iso: "MK", dialCode: "+389", flag: isoToFlag("MK"), minLength: 8, maxLength: 8 },
  { name: "Madagascar", iso: "MG", dialCode: "+261", flag: isoToFlag("MG"), minLength: 9, maxLength: 10 },
  { name: "Malawi", iso: "MW", dialCode: "+265", flag: isoToFlag("MW"), minLength: 9, maxLength: 9 },
  { name: "Malaysia", iso: "MY", dialCode: "+60", flag: isoToFlag("MY"), minLength: 9, maxLength: 10 },
  { name: "Maldives", iso: "MV", dialCode: "+960", flag: isoToFlag("MV"), minLength: 7, maxLength: 7 },
  { name: "Mali", iso: "ML", dialCode: "+223", flag: isoToFlag("ML"), minLength: 8, maxLength: 8 },
  { name: "Malta", iso: "MT", dialCode: "+356", flag: isoToFlag("MT"), minLength: 8, maxLength: 8 },
  { name: "Marshall Islands", iso: "MH", dialCode: "+692", flag: isoToFlag("MH"), minLength: 7, maxLength: 7 },
  { name: "Martinique", iso: "MQ", dialCode: "+596", flag: isoToFlag("MQ"), minLength: 9, maxLength: 9 },
  { name: "Mauritania", iso: "MR", dialCode: "+222", flag: isoToFlag("MR"), minLength: 8, maxLength: 8 },
  { name: "Mauritius", iso: "MU", dialCode: "+230", flag: isoToFlag("MU"), minLength: 7, maxLength: 8 },
  { name: "Mayotte", iso: "YT", dialCode: "+262", flag: isoToFlag("YT"), minLength: 9, maxLength: 9 },
  { name: "Mexico", iso: "MX", dialCode: "+52", flag: isoToFlag("MX"), minLength: 10, maxLength: 10 },
  { name: "Micronesia", iso: "FM", dialCode: "+691", flag: isoToFlag("FM"), minLength: 7, maxLength: 7 },
  { name: "Moldova", iso: "MD", dialCode: "+373", flag: isoToFlag("MD"), minLength: 8, maxLength: 8 },
  { name: "Monaco", iso: "MC", dialCode: "+377", flag: isoToFlag("MC"), minLength: 8, maxLength: 9 },
  { name: "Mongolia", iso: "MN", dialCode: "+976", flag: isoToFlag("MN"), minLength: 8, maxLength: 8 },
  { name: "Montenegro", iso: "ME", dialCode: "+382", flag: isoToFlag("ME"), minLength: 8, maxLength: 8 },
  { name: "Montserrat", iso: "MS", dialCode: "+1664", flag: isoToFlag("MS"), minLength: 7, maxLength: 7 },
  { name: "Morocco", iso: "MA", dialCode: "+212", flag: isoToFlag("MA"), minLength: 9, maxLength: 9 },
  { name: "Mozambique", iso: "MZ", dialCode: "+258", flag: isoToFlag("MZ"), minLength: 9, maxLength: 9 },
  { name: "Myanmar", iso: "MM", dialCode: "+95", flag: isoToFlag("MM"), minLength: 8, maxLength: 10 },
  { name: "Namibia", iso: "NA", dialCode: "+264", flag: isoToFlag("NA"), minLength: 9, maxLength: 9 },
  { name: "Nauru", iso: "NR", dialCode: "+674", flag: isoToFlag("NR"), minLength: 7, maxLength: 7 },
  { name: "Nepal", iso: "NP", dialCode: "+977", flag: isoToFlag("NP"), minLength: 10, maxLength: 10 },
  { name: "Netherlands", iso: "NL", dialCode: "+31", flag: isoToFlag("NL"), minLength: 9, maxLength: 9 },
  { name: "Netherlands Antilles", iso: "AN", dialCode: "+599", flag: isoToFlag("AN"), minLength: 7, maxLength: 8 },
  { name: "New Caledonia", iso: "NC", dialCode: "+687", flag: isoToFlag("NC"), minLength: 6, maxLength: 6 },
  { name: "New Zealand", iso: "NZ", dialCode: "+64", flag: isoToFlag("NZ"), minLength: 9, maxLength: 10 },
  { name: "Nicaragua", iso: "NI", dialCode: "+505", flag: isoToFlag("NI"), minLength: 8, maxLength: 8 },
  { name: "Niger", iso: "NE", dialCode: "+227", flag: isoToFlag("NE"), minLength: 8, maxLength: 8 },
  { name: "Nigeria", iso: "NG", dialCode: "+234", flag: isoToFlag("NG"), minLength: 10, maxLength: 10 },
  { name: "Niue", iso: "NU", dialCode: "+683", flag: isoToFlag("NU"), minLength: 4, maxLength: 4 },
  { name: "Norfolk Island", iso: "NF", dialCode: "+672", flag: isoToFlag("NF"), minLength: 6, maxLength: 6 },
  { name: "Northern Mariana Islands", iso: "MP", dialCode: "+1670", flag: isoToFlag("MP"), minLength: 7, maxLength: 7 },
  { name: "Norway", iso: "NO", dialCode: "+47", flag: isoToFlag("NO"), minLength: 8, maxLength: 8 },
  { name: "Pakistan", iso: "PK", dialCode: "+92", flag: isoToFlag("PK"), minLength: 10, maxLength: 10 },
  { name: "Palau", iso: "PW", dialCode: "+680", flag: isoToFlag("PW"), minLength: 7, maxLength: 7 },
  { name: "Palestine", iso: "PS", dialCode: "+970", flag: isoToFlag("PS"), minLength: 9, maxLength: 9 },
  { name: "Panama", iso: "PA", dialCode: "+507", flag: isoToFlag("PA"), minLength: 8, maxLength: 8 },
  { name: "Papua New Guinea", iso: "PG", dialCode: "+675", flag: isoToFlag("PG"), minLength: 8, maxLength: 8 },
  { name: "Paraguay", iso: "PY", dialCode: "+595", flag: isoToFlag("PY"), minLength: 9, maxLength: 9 },
  { name: "Peru", iso: "PE", dialCode: "+51", flag: isoToFlag("PE"), minLength: 9, maxLength: 9 },
  { name: "Philippines", iso: "PH", dialCode: "+63", flag: isoToFlag("PH"), minLength: 10, maxLength: 10 },
  { name: "Pitcairn", iso: "PN", dialCode: "+872", flag: isoToFlag("PN"), minLength: 9, maxLength: 9 },
  { name: "Poland", iso: "PL", dialCode: "+48", flag: isoToFlag("PL"), minLength: 9, maxLength: 9 },
  { name: "Portugal", iso: "PT", dialCode: "+351", flag: isoToFlag("PT"), minLength: 9, maxLength: 9 },
  { name: "Puerto Rico", iso: "PR", dialCode: "+1939", flag: isoToFlag("PR"), minLength: 7, maxLength: 7 },
  { name: "Romania", iso: "RO", dialCode: "+40", flag: isoToFlag("RO"), minLength: 9, maxLength: 9 },
  { name: "Russia", iso: "RU", dialCode: "+7", flag: isoToFlag("RU"), minLength: 10, maxLength: 10 },
  { name: "Rwanda", iso: "RW", dialCode: "+250", flag: isoToFlag("RW"), minLength: 9, maxLength: 9 },
  { name: "Reunion", iso: "RE", dialCode: "+262", flag: isoToFlag("RE"), minLength: 9, maxLength: 9 },
  { name: "Saint Barthelemy", iso: "BL", dialCode: "+590", flag: isoToFlag("BL"), minLength: 9, maxLength: 9 },
  { name: "Saint Helena", iso: "SH", dialCode: "+290", flag: isoToFlag("SH"), minLength: 4, maxLength: 4 },
  { name: "Saint Kitts and Nevis", iso: "KN", dialCode: "+1869", flag: isoToFlag("KN"), minLength: 7, maxLength: 7 },
  { name: "Saint Lucia", iso: "LC", dialCode: "+1758", flag: isoToFlag("LC"), minLength: 7, maxLength: 7 },
  { name: "Saint Martin", iso: "MF", dialCode: "+590", flag: isoToFlag("MF"), minLength: 9, maxLength: 9 },
  { name: "Saint Pierre and Miquelon", iso: "PM", dialCode: "+508", flag: isoToFlag("PM"), minLength: 6, maxLength: 6 },
  { name: "Saint Vincent and the Grenadines", iso: "VC", dialCode: "+1784", flag: isoToFlag("VC"), minLength: 7, maxLength: 7 },
  { name: "Samoa", iso: "WS", dialCode: "+685", flag: isoToFlag("WS"), minLength: 7, maxLength: 7 },
  { name: "San Marino", iso: "SM", dialCode: "+378", flag: isoToFlag("SM"), minLength: 10, maxLength: 10 },
  { name: "Sao Tome and Principe", iso: "ST", dialCode: "+239", flag: isoToFlag("ST"), minLength: 7, maxLength: 7 },
  { name: "Senegal", iso: "SN", dialCode: "+221", flag: isoToFlag("SN"), minLength: 9, maxLength: 9 },
  { name: "Serbia", iso: "RS", dialCode: "+381", flag: isoToFlag("RS"), minLength: 9, maxLength: 9 },
  { name: "Seychelles", iso: "SC", dialCode: "+248", flag: isoToFlag("SC"), minLength: 7, maxLength: 7 },
  { name: "Sierra Leone", iso: "SL", dialCode: "+232", flag: isoToFlag("SL"), minLength: 8, maxLength: 8 },
  { name: "Singapore", iso: "SG", dialCode: "+65", flag: isoToFlag("SG"), minLength: 8, maxLength: 8 },
  { name: "Slovakia", iso: "SK", dialCode: "+421", flag: isoToFlag("SK"), minLength: 9, maxLength: 9 },
  { name: "Slovenia", iso: "SI", dialCode: "+386", flag: isoToFlag("SI"), minLength: 8, maxLength: 8 },
  { name: "Solomon Islands", iso: "SB", dialCode: "+677", flag: isoToFlag("SB"), minLength: 7, maxLength: 7 },
  { name: "Somalia", iso: "SO", dialCode: "+252", flag: isoToFlag("SO"), minLength: 8, maxLength: 9 },
  { name: "South Africa", iso: "ZA", dialCode: "+27", flag: isoToFlag("ZA"), minLength: 9, maxLength: 9 },
  { name: "South Sudan", iso: "SS", dialCode: "+211", flag: isoToFlag("SS"), minLength: 9, maxLength: 9 },
  { name: "South Georgia", iso: "GS", dialCode: "+500", flag: isoToFlag("GS"), minLength: 5, maxLength: 5 },
  { name: "Spain", iso: "ES", dialCode: "+34", flag: isoToFlag("ES"), minLength: 9, maxLength: 9 },
  { name: "Sri Lanka", iso: "LK", dialCode: "+94", flag: isoToFlag("LK"), minLength: 9, maxLength: 9 },
  { name: "Sudan", iso: "SD", dialCode: "+249", flag: isoToFlag("SD"), minLength: 9, maxLength: 9 },
  { name: "Suriname", iso: "SR", dialCode: "+597", flag: isoToFlag("SR"), minLength: 7, maxLength: 7 },
  { name: "Svalbard and Jan Mayen", iso: "SJ", dialCode: "+47", flag: isoToFlag("SJ"), minLength: 8, maxLength: 8 },
  { name: "Eswatini", iso: "SZ", dialCode: "+268", flag: isoToFlag("SZ"), minLength: 8, maxLength: 8 },
  { name: "Sweden", iso: "SE", dialCode: "+46", flag: isoToFlag("SE"), minLength: 9, maxLength: 10 },
  { name: "Switzerland", iso: "CH", dialCode: "+41", flag: isoToFlag("CH"), minLength: 9, maxLength: 9 },
  { name: "Syria", iso: "SY", dialCode: "+963", flag: isoToFlag("SY"), minLength: 9, maxLength: 9 },
  { name: "Taiwan", iso: "TW", dialCode: "+886", flag: isoToFlag("TW"), minLength: 9, maxLength: 9 },
  { name: "Tajikistan", iso: "TJ", dialCode: "+992", flag: isoToFlag("TJ"), minLength: 9, maxLength: 9 },
  { name: "Tanzania", iso: "TZ", dialCode: "+255", flag: isoToFlag("TZ"), minLength: 9, maxLength: 9 },
  { name: "Thailand", iso: "TH", dialCode: "+66", flag: isoToFlag("TH"), minLength: 9, maxLength: 9 },
  { name: "Timor-Leste", iso: "TL", dialCode: "+670", flag: isoToFlag("TL"), minLength: 8, maxLength: 8 },
  { name: "Togo", iso: "TG", dialCode: "+228", flag: isoToFlag("TG"), minLength: 8, maxLength: 8 },
  { name: "Tokelau", iso: "TK", dialCode: "+690", flag: isoToFlag("TK"), minLength: 4, maxLength: 4 },
  { name: "Tonga", iso: "TO", dialCode: "+676", flag: isoToFlag("TO"), minLength: 7, maxLength: 7 },
  { name: "Trinidad and Tobago", iso: "TT", dialCode: "+1868", flag: isoToFlag("TT"), minLength: 7, maxLength: 7 },
  { name: "Tunisia", iso: "TN", dialCode: "+216", flag: isoToFlag("TN"), minLength: 8, maxLength: 8 },
  { name: "Turkey", iso: "TR", dialCode: "+90", flag: isoToFlag("TR"), minLength: 10, maxLength: 10 },
  { name: "Turkmenistan", iso: "TM", dialCode: "+993", flag: isoToFlag("TM"), minLength: 8, maxLength: 8 },
  { name: "Turks and Caicos Islands", iso: "TC", dialCode: "+1649", flag: isoToFlag("TC"), minLength: 7, maxLength: 7 },
  { name: "Tuvalu", iso: "TV", dialCode: "+688", flag: isoToFlag("TV"), minLength: 5, maxLength: 6 },
  { name: "Uganda", iso: "UG", dialCode: "+256", flag: isoToFlag("UG"), minLength: 9, maxLength: 9 },
  { name: "Ukraine", iso: "UA", dialCode: "+380", flag: isoToFlag("UA"), minLength: 9, maxLength: 9 },
  { name: "United Kingdom", iso: "GB", dialCode: "+44", flag: isoToFlag("GB"), minLength: 10, maxLength: 11 },
  { name: "United States", iso: "US", dialCode: "+1", flag: isoToFlag("US"), minLength: 10, maxLength: 10 },
  { name: "Uruguay", iso: "UY", dialCode: "+598", flag: isoToFlag("UY"), minLength: 8, maxLength: 8 },
  { name: "Uzbekistan", iso: "UZ", dialCode: "+998", flag: isoToFlag("UZ"), minLength: 9, maxLength: 9 },
  { name: "Vanuatu", iso: "VU", dialCode: "+678", flag: isoToFlag("VU"), minLength: 7, maxLength: 7 },
  { name: "Venezuela", iso: "VE", dialCode: "+58", flag: isoToFlag("VE"), minLength: 10, maxLength: 10 },
  { name: "Vietnam", iso: "VN", dialCode: "+84", flag: isoToFlag("VN"), minLength: 9, maxLength: 10 },
  { name: "British Virgin Islands", iso: "VG", dialCode: "+1284", flag: isoToFlag("VG"), minLength: 7, maxLength: 7 },
  { name: "U.S. Virgin Islands", iso: "VI", dialCode: "+1340", flag: isoToFlag("VI"), minLength: 7, maxLength: 7 },
  { name: "Wallis and Futuna", iso: "WF", dialCode: "+681", flag: isoToFlag("WF"), minLength: 6, maxLength: 6 },
  { name: "Yemen", iso: "YE", dialCode: "+967", flag: isoToFlag("YE"), minLength: 9, maxLength: 9 },
  { name: "Zambia", iso: "ZM", dialCode: "+260", flag: isoToFlag("ZM"), minLength: 9, maxLength: 9 },
  { name: "Zimbabwe", iso: "ZW", dialCode: "+263", flag: isoToFlag("ZW"), minLength: 9, maxLength: 9 },
];

export const defaultCountry = countryCodes[0];

export function getCountryByIso(iso: string): CountryCode | undefined {
  return countryCodes.find((c) => c.iso === iso);
}

export function getCountryByDialCode(dialCode: string): CountryCode | undefined {
  return countryCodes.find((c) => c.dialCode === dialCode);
}

export function validatePhoneForCountry(phone: string, country: CountryCode): boolean {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= country.minLength && digitsOnly.length <= country.maxLength;
}

export interface PhoneValidationResult {
  isValid: boolean;
  error?: string;
}

export function stripLeadingZero(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.startsWith("0") ? digitsOnly.slice(1) : digitsOnly;
}

export function validatePhoneWithMessage(phone: string, country: CountryCode): PhoneValidationResult {
  const digitsOnly = phone.replace(/\D/g, "");
  const normalized = stripLeadingZero(digitsOnly);

  if (!digitsOnly) {
    return { isValid: false, error: "Phone number is required" };
  }

  if (normalized.length < country.minLength) {
    const digitsNeeded = country.minLength - normalized.length;
    return {
      isValid: false,
      error: `${digitsNeeded} more digit${digitsNeeded > 1 ? "s" : ""} needed for ${country.name}`
    };
  }

  if (normalized.length > country.maxLength) {
    return {
      isValid: false,
      error: `Phone number too long for ${country.name} (max ${country.maxLength} digits)`
    };
  }

  return { isValid: true };
}

export function formatPhoneDisplay(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, "");
  if (digitsOnly.length <= 3) return digitsOnly;
  if (digitsOnly.length <= 6) return `${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2)}`;
  return `${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5)}`;
}
