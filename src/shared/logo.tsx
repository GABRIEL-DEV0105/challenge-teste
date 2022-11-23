type logoProps = {
  color?: string
}

export function Logo({color = 'black'}: logoProps) {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      min-width="54"
      height="36"
      fill="none"
      viewBox="0 0 54 36"
    >
      <g fill={color} clipPath="url(#clip0_2_57)">
        <path d="M13.382 2.054l-1.468 4.183a392.279 392.279 0 00-2.886 8.774l2.813-12.113-2.279-.838-6.665 18.757 1.603.631 1.462-4.177c.771-2.152 1.592-4.682 2.88-8.733L6.03 20.588l2.25.843 6.728-18.746-1.626-.63zM17.438 10.58l-3.083 8.688c-.391.182-.8.32-1.22.413.017-.151.053-.3.106-.442L18.26 5.09c.461-1.268.686-1.268.866-1.268.18 0 .36.052.36.477a6.747 6.747 0 01-.478 1.853l-.174.465 1.687.625.135-.413c.338-.84.528-1.733.563-2.64a2.183 2.183 0 00-.563-1.543 1.906 1.906 0 00-1.451-.574 2.09 2.09 0 00-.89.166c-.281.12-.534.3-.741.529a6.745 6.745 0 00-1.221 2.295l-4.82 13.582c-.36 1.027-.378 1.824-.04 2.295.117.16.271.289.449.373.178.084.373.121.57.109.78 0 1.214-.5 2.142-1.59l1.232.448 3.24-9.072-1.687-.625zM17.977 20.766l1.851.683 1.384-3.856-1.845-.677-1.39 3.85zM25.841 18.413c-.461 1.274-.686 1.274-.866 1.274-.18 0-.36-.057-.36-.476.07-.641.233-1.267.484-1.86L29.453 5.09c.466-1.269.691-1.269.871-1.269.18 0 .355.052.355.477A6.743 6.743 0 0130.2 6.15l-.17.465 1.688.625.135-.413c.338-.84.528-1.733.563-2.64a2.206 2.206 0 00-.563-1.543 1.923 1.923 0 00-1.451-.574 2.073 2.073 0 00-.89.165c-.282.12-.535.3-.741.53a6.647 6.647 0 00-1.226 2.295L23.828 15.55c-.839 2.375-.923 2.944-.923 3.77-.018.568.184 1.12.563 1.538.189.193.416.343.666.442.25.1.517.144.785.131.305.01.608-.048.89-.169.281-.12.534-.302.741-.53a6.663 6.663 0 001.226-2.296l.563-1.652-1.688-.574-.81 2.203zM43.217 5.09c.461-1.269.686-1.269.866-1.269.18 0 .36.052.36.477a6.589 6.589 0 01-.484 1.853l-.168.465 1.687.625.14-.413c.339-.84.53-1.733.563-2.64a2.206 2.206 0 00-.562-1.543l-.102-.097.681-1.923L44.516 0l-.742 2.106a2.115 2.115 0 00-1.17.574 4.419 4.419 0 00-1.07 1.801c-.646 1.83-.854 4.614-1.034 7.328-.186 2.616-.366 5.09-.906 6.604-.467 1.274-.692 1.274-.872 1.274-.18 0-.354-.057-.354-.476.06-.637.21-1.26.444-1.854l.175-.464-1.688-.632-.135.42a7.857 7.857 0 00-.562 2.639c-.007.541.18 1.067.523 1.48l-.67 1.876 1.688.626.67-1.876a2.182 2.182 0 001.389-.574 4.36 4.36 0 001.074-1.802c.647-1.819.85-4.63 1.046-7.345h-.1.1c.175-2.628.355-5.095.895-6.615zM52.318 2.06l-3.144 8.848h-1.125l2.92-8.223-1.683-.625-6.682 18.763 1.682.625 3.144-8.796h1.125l-2.914 8.171 1.682.625L54 2.685l-1.682-.625zM36.782 2.066l-8.094 18.751 1.687.626 3.64-8.79h.635l-2.374 8.176 1.688.62L39.178 2.96l-2.396-.895zm-1.468 8.836h-.72l2.666-6.627.113.046-2.026 6.581h-.033zM6.103 32.798l6.255-.379 38.154-4.062-.09-1.681H.09v1.681h22.776l22.06-.459L28.25 29.04 0 32.047l.04 1.687L40.128 36l.095-1.675-27.866-1.578-6.255.051z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2_57">
          <path fill="#fff" d="M0 0H54V36H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}