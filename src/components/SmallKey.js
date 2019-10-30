import React from "react";

const SmallKey = props => {
  if (props.flipped) {
    return (
      <svg width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.1029 9.66433C3.03308 9.37893 2.96973 9.08348 2.91413 8.77796C1.69099 8.69876 0.251916 8.72264 0.0178899 7.31325C-0.199328 6.00696 1.61082 5.3821 2.7719 5.24883C2.84302 4.64912 2.9749 4.06323 3.17531 3.51381L3.41192 2.95182C3.50372 2.76197 3.60199 2.57715 3.71447 2.39988C5.1057 0.202186 8.70015 -0.934378 10.8361 0.959057C11.599 1.63546 11.7826 2.67396 11.939 3.61565C12.0877 4.51711 12.2881 5.42988 12.9294 5.89506C13.3716 5.89506 13.8461 5.89632 14.3452 5.89632C14.3543 5.67127 14.5301 5.46885 14.9878 5.40976C15.5916 5.33181 15.8851 5.59961 16.008 5.89883C16.0093 5.89883 16.0119 5.89883 16.0132 5.89883C16.039 5.9881 16.0532 6.10125 16.0519 6.2647C16.0494 6.63182 16.0429 7.0002 16.0041 7.3648C15.9395 7.962 15.8114 8.49759 15.5231 9.0093C15.4119 9.15388 15.2348 9.30601 14.94 9.30978C14.6206 9.31356 14.406 9.14131 14.2987 9.00678C14.2638 8.96278 14.2405 8.91878 14.225 8.87351C14.1849 8.86974 14.1448 8.86597 14.1047 8.86094C13.7052 8.87477 13.4337 8.8798 13.1686 8.86597C12.1136 9.32739 11.93 11.2409 11.533 12.1537C11.0133 13.3468 9.72805 13.8171 8.48939 13.9667C5.72116 14.2999 3.69896 12.082 3.1029 9.66433ZM10.2995 11.8645C10.3112 11.8268 10.328 11.7929 10.3538 11.7715C11.749 10.5746 10.0203 8.82951 10.0914 7.41132C10.125 6.76006 10.4508 6.13394 10.6448 5.51914C10.9189 4.64535 10.7728 3.68606 10.4625 2.83992C10.0306 1.66187 8.75316 1.13256 7.48864 1.08478C6.67278 1.05335 5.69659 1.57511 5.14967 2.13585C3.79981 3.51884 3.69249 5.38839 3.73128 7.21644C3.76619 8.93135 4.24847 11.0461 5.88019 11.994C6.9999 12.644 9.20052 12.7949 10.2995 11.8645Z" fill={props.color} />
        <path d="M17.9688 7.49612C17.9287 7.85821 17.8253 8.50444 17.5848 8.95706C17.4775 9.11421 17.2952 9.30406 16.9655 9.30783C16.6461 9.3116 16.4315 9.13936 16.3242 9.00483C16.2893 8.96083 16.266 8.91682 16.2505 8.8703C16.0876 8.86905 15.9415 8.86779 15.8096 8.86653C16.0565 8.30705 16.1651 7.71488 16.2181 7.07997C16.2505 6.69902 16.2931 6.27783 16.2466 5.89563C16.288 5.89563 16.328 5.89563 16.3694 5.89563C16.3772 5.66932 16.5517 5.46564 17.012 5.4053C17.4361 5.35123 17.7064 5.4669 17.8731 5.64418C18.177 6.21371 18.0386 6.86749 17.9688 7.49612Z" fill={props.color} />
        <path d="M34.0881 10.8606C34.3325 11.1925 34.1359 11.713 33.8825 11.9745C33.6692 12.1958 33.3214 12.2159 33.033 12.2524C32.499 12.3215 31.9534 12.3479 31.422 12.2499C30.707 12.1179 30.804 11.4917 30.8415 10.9323C30.8453 10.8732 30.879 10.6783 30.9617 10.6695C31.3793 10.6255 31.7375 10.6833 31.744 10.1741C31.744 10.1578 31.753 10.1251 31.7659 10.0874C31.4311 10.0911 31.1169 10.0308 30.9772 9.79318C30.8428 9.5631 30.7898 9.30662 30.7846 9.04636C31.3018 9.02122 31.8202 8.9835 32.3271 9.04636C32.4435 9.06145 32.5314 8.8012 32.4279 8.78737C31.6767 8.69433 30.9074 8.81377 30.1497 8.80246C29.7618 8.79617 29.3752 8.81754 28.9887 8.84143C27.2018 8.8452 24.7464 8.82509 24.109 8.85526C23.0436 8.90681 20.1448 8.89675 17.9299 8.88292C18.1058 8.46174 18.1963 7.98649 18.2351 7.63069C18.2997 7.05612 18.4109 6.45515 18.2971 5.9007C22.5458 5.9095 27.1953 5.92458 29.3274 5.94219L29.5601 5.93213C32.5766 5.9535 34.4256 6.02014 37.442 6.02265C38.916 6.02265 40.1689 6.14838 40.4857 6.55573C40.924 7.12024 41.202 7.39684 40.818 7.97643C40.4133 8.58872 39.4862 8.6717 38.6691 8.6541C38.6729 9.00865 38.6678 9.3896 38.4467 9.67625C38.254 9.92645 37.8894 9.97422 37.5468 9.9868C37.53 10.2621 37.5597 10.5589 37.8584 10.5123C38.1325 10.4696 38.3407 10.6569 38.4893 10.8581C38.7337 11.19 38.5372 11.7105 38.2838 11.972C38.0704 12.1933 37.7226 12.2134 37.4343 12.2499C36.9003 12.319 36.3547 12.3454 35.8233 12.2474C35.1082 12.1153 35.2052 11.4892 35.2427 10.9297C35.2466 10.8707 35.2802 10.6758 35.363 10.667C35.7806 10.623 36.1387 10.6808 36.1452 10.1716C36.1452 10.1553 36.1543 10.1226 36.1672 10.0849C35.8323 10.0886 35.5181 10.0283 35.3785 9.79066C35.1677 9.43109 35.1561 9.01116 35.213 8.60507C34.9065 8.65033 34.5807 8.65913 34.2717 8.65284C34.2756 9.00739 34.2704 9.38834 34.0493 9.675C33.8567 9.92519 33.492 9.97297 33.1494 9.98554C33.1326 10.2609 33.1623 10.5576 33.461 10.5111C33.7312 10.4721 33.9394 10.6594 34.0881 10.8606Z" fill={props.color} />
      </svg>

    )
  } else {
    return (
      <svg width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.8971 9.66433C37.9669 9.37893 38.0303 9.08348 38.0859 8.77796C39.309 8.69876 40.7481 8.72264 40.9821 7.31325C41.1993 6.00696 39.3892 5.3821 38.2281 5.24883C38.157 4.64912 38.0251 4.06323 37.8247 3.51381L37.5881 2.95182C37.4963 2.76197 37.398 2.57715 37.2855 2.39988C35.8943 0.202186 32.2999 -0.934378 30.1639 0.959057C29.401 1.63546 29.2174 2.67396 29.061 3.61565C28.9123 4.51711 28.7119 5.42988 28.0706 5.89506C27.6284 5.89506 27.1539 5.89632 26.6548 5.89632C26.6457 5.67127 26.4699 5.46885 26.0122 5.40976C25.4084 5.33181 25.1149 5.59961 24.992 5.89883C24.9907 5.89883 24.9881 5.89883 24.9868 5.89883C24.961 5.9881 24.9468 6.10125 24.9481 6.2647C24.9506 6.63182 24.9571 7.0002 24.9959 7.3648C25.0605 7.962 25.1886 8.49759 25.4769 9.0093C25.5881 9.15388 25.7652 9.30601 26.06 9.30978C26.3794 9.31356 26.594 9.14131 26.7013 9.00678C26.7362 8.96278 26.7595 8.91878 26.775 8.87351C26.8151 8.86974 26.8552 8.86597 26.8953 8.86094C27.2948 8.87477 27.5663 8.8798 27.8314 8.86597C28.8864 9.32739 29.07 11.2409 29.467 12.1537C29.9867 13.3468 31.2719 13.8171 32.5106 13.9667C35.2788 14.2999 37.301 12.082 37.8971 9.66433ZM30.7005 11.8645C30.6888 11.8268 30.672 11.7929 30.6462 11.7715C29.251 10.5746 30.9797 8.82951 30.9086 7.41132C30.875 6.76006 30.5492 6.13394 30.3552 5.51914C30.0811 4.64535 30.2272 3.68606 30.5375 2.83992C30.9694 1.66187 32.2468 1.13256 33.5114 1.08478C34.3272 1.05335 35.3034 1.57511 35.8503 2.13585C37.2002 3.51884 37.3075 5.38839 37.2687 7.21644C37.2338 8.93135 36.7515 11.0461 35.1198 11.994C34.0001 12.644 31.7995 12.7949 30.7005 11.8645Z" fill={props.color} />
        <path d="M23.0312 7.49612C23.0713 7.85821 23.1747 8.50444 23.4152 8.95706C23.5225 9.11421 23.7048 9.30406 24.0345 9.30783C24.3539 9.3116 24.5685 9.13936 24.6758 9.00483C24.7107 8.96083 24.734 8.91682 24.7495 8.8703C24.9124 8.86905 25.0585 8.86779 25.1904 8.86653C24.9435 8.30705 24.8349 7.71488 24.7819 7.07997C24.7495 6.69902 24.7069 6.27783 24.7534 5.89563C24.712 5.89563 24.672 5.89563 24.6306 5.89563C24.6228 5.66932 24.4483 5.46564 23.988 5.4053C23.5639 5.35123 23.2936 5.4669 23.1269 5.64418C22.823 6.21371 22.9614 6.86749 23.0312 7.49612Z" fill={props.color} />
        <path d="M6.9119 10.8606C6.66753 11.1925 6.86406 11.713 7.11748 11.9745C7.33082 12.1958 7.67863 12.2159 7.96696 12.2524C8.50095 12.3215 9.04658 12.3479 9.57799 12.2499C10.293 12.1179 10.196 11.4917 10.1585 10.9323C10.1547 10.8732 10.121 10.6783 10.0383 10.6695C9.62066 10.6255 9.26251 10.6833 9.25604 10.1741C9.25604 10.1578 9.24699 10.1251 9.23406 10.0874C9.56894 10.0911 9.88313 10.0308 10.0228 9.79318C10.1572 9.5631 10.2102 9.30662 10.2154 9.04636C9.69824 9.02122 9.17976 8.9835 8.67292 9.04636C8.55655 9.06145 8.46863 8.8012 8.57207 8.78737C9.32328 8.69433 10.0926 8.81377 10.8503 8.80246C11.2382 8.79617 11.6248 8.81754 12.0113 8.84143C13.7982 8.8452 16.2536 8.82509 16.891 8.85526C17.9564 8.90681 20.8552 8.89675 23.0701 8.88292C22.8942 8.46174 22.8037 7.98649 22.7649 7.63069C22.7003 7.05612 22.5891 6.45515 22.7029 5.9007C18.4542 5.9095 13.8047 5.92458 11.6726 5.94219L11.4399 5.93213C8.42337 5.9535 6.57444 6.02014 3.55795 6.02265C2.08397 6.02265 0.831089 6.14838 0.514315 6.55573C0.0759983 7.12024 -0.201988 7.39684 0.18202 7.97643C0.58672 8.58872 1.51378 8.6717 2.33093 8.6541C2.32705 9.00865 2.33222 9.3896 2.55332 9.67625C2.74597 9.92645 3.11059 9.97422 3.45322 9.9868C3.47003 10.2621 3.44029 10.5589 3.14162 10.5123C2.86751 10.4696 2.65934 10.6569 2.51065 10.8581C2.26628 11.19 2.46281 11.7105 2.71623 11.972C2.92957 12.1933 3.27738 12.2134 3.56571 12.2499C4.0997 12.319 4.64533 12.3454 5.17674 12.2474C5.89175 12.1153 5.79478 11.4892 5.75728 10.9297C5.7534 10.8707 5.71979 10.6758 5.63704 10.667C5.21941 10.623 4.86126 10.6808 4.85479 10.1716C4.85479 10.1553 4.84574 10.1226 4.83281 10.0849C5.16769 10.0886 5.48188 10.0283 5.62152 9.79066C5.83227 9.43109 5.84391 9.01116 5.78702 8.60507C6.09345 8.65033 6.41928 8.65913 6.7283 8.65284C6.72442 9.00739 6.72959 9.38834 6.95069 9.675C7.14334 9.92519 7.50795 9.97297 7.85059 9.98554C7.8674 10.2609 7.83766 10.5576 7.53899 10.5111C7.26876 10.4721 7.06059 10.6594 6.9119 10.8606Z" fill={props.color} />
      </svg>
    )
  }

}

export default SmallKey;
