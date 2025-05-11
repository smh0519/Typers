export const signUp = async (data) =>{
    console.log("회원가입 폼 데이터:", data);
    try {
        const res = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: data.id,
            email: data.email,
            password: data.pwd,
          }),
        });
    
        if (res.ok) {
          const result = await res.json();
          console.log('회원가입 성공:', result);
        } else {
          const error = await res.json();
          console.error('회원가입 실패:', error);
        }
      } catch (err) {
        console.error('네트워크 오류:', err);
      }
}

export const signin = async () => {
    
}