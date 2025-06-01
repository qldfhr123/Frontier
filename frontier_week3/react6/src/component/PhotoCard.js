import React from "react";

const photocard = () => {
    let name_array = [
        { name: "아이유", img: "https://i.imgur.com/2yaf2wb.jpg" }, // IU
        { name: "수지", img: "https://i.imgur.com/nRUZLk6.jpg" },   // Suzy
        { name: "나연", img: "https://i.imgur.com/kkP7m4f.jpg" },   // Nayeon
        { name: "나나", img: "https://i.imgur.com/Y6X3PiL.jpg" },   // Nana
        { name: "원영", img: "https://i.imgur.com/wNeiSQC.jpg" }    // Wonyoung
    ];
    // 모든 이미지는 공개 인터넷 상의 임시 이미지 링크이며, 실제 팬사이트/공식 자료로 변경 권장

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginTop: "32px"
        }}>
            {name_array.map((data, idx) => (
                <div key={idx}
                    style={{
                        width: "160px",
                        border: "1px solid #eee",
                        borderRadius: "16px",
                        padding: "20px 12px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                        background: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                    <div style={{
                        fontWeight: "bold",
                        fontSize: "1.15rem",
                        marginBottom: "12px",
                        textAlign: "center"
                    }}>
                        {data.name}
                    </div>
                    <img
                        src={data.img}
                        alt={data.name}
                        style={{
                            width: "110px",
                            height: "150px",
                            borderRadius: "12px",
                            objectFit: "cover",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.09)"
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default photocard;
