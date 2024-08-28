export const config={

    project:{
        name:"Personel Takip Programı",
        description:"----"
    },
    api:{
        baseUrl:"http://localhost:3000"
    }
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

export const duty = (getDuty) => {
    const dutyMapping = {
        BEKCI: 'Bekçi',
        SEF: 'Şef',
        KASIYER: 'Kasiyer',
        MUHASEBE:"Muhasebe Personeli",
        SATIS:"Satış Sorumlusu"
        // Diğer görevler buraya eklenebilir
    };

    return dutyMapping[getDuty] || getDuty; // Eşleşme yoksa orijinal değeri döndür
};

export const leaveTypes=(getLeaveType)=>{
    const leaveTypeMapping={
        YILLIK:"Yıllık İzin",
        UCRETSIZ:"Ücretsiz İzin",
        SAGLIK:"Sağlık İzni"
    };
    return leaveTypeMapping[getLeaveType] || getLeaveType;
}