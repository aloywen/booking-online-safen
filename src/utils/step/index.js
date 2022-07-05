import { stepone, steptwo, stepthree, stepfour, kelebihansatu, kelebihandua, kelebihantiga } from '../../assets/img'

const steps = [
    {
        media: {
            name: "cek syarat",
            source: {
                url: "../../assets/img/t1.png"
            },
            type: "IMAGE"
        },
        cardSubtitle:
            "Cek syarat dan ketentuan untuk menyewa",
    },
    {
        media: {
            name: "cek box",
            source: {
                url:
                    { steptwo }
            },
            type: "IMAGE"
        },
        cardSubtitle:
            "Cek ketersedian box",
    },
    {
        media: {
            name: "formulir",
            source: {
                url:
                    { stepthree }
            },
            type: "IMAGE"
        },
        cardSubtitle:
            "Isi formulir dengan data yang valid",
    },
    {
        media: {
            name: "payment",
            source: {
                url:
                    { stepfour }
            },
            type: "IMAGE"
        },
        cardSubtitle:
            "Cek email pemberitahuan dan lakukan pembayaran",
    },
]

const kelebihan = [
    {
        img: ''
    }
]

export { steps }