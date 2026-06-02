import Card from './components/card'
import './index.css'
const App = () => {
  const jobOpenings = [
  {
    id: 1,
    logo: "https://imgs.search.brave.com/bZPY5KFGckvtEdvVeXVU518z-eAJvyopsZh3m6v-_Zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$25/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    logo: "https://imgs.search.brave.com/8DHnu731LElAOp5CHwzooMJfmkQfpDzZ1f25gFjhsdc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NzY2LzIyMy9zbWFs/bC9hbWF6b24tbG9n/by1hbWF6b24taWNv/bi10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$30/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    logo: "https://imgs.search.brave.com/ywtSPTSt9vlope_vXBKLfH2tYX9sDRsYBudPP916G2U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/ZWxlbWVudF9vdXIv/c20vMjAxODA2Mjcv/c21fNWIzMzQ2MTE4/NjBmYS5qcGc",
    companyName: "Microsoft",
    datePosted: "1 day ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    logo: "https://imgs.search.brave.com/ZeYvSfT6KWIIw3qLEhIDlXkspf0psLFy9fHz0_S5GZY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9k/b3dubG9hZC1oZC1t/ZXRhLWZhY2Vib29r/LWxvZ28tcG5nLTcw/MTc1MTY5NDc3NzA2/N2hxcXdtM2Rvcmgu/cG5n",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$22/hr",
    location: "Delhi, India"
  },
  {
    id: 5,
    logo: "https://imgs.search.brave.com/Fq88B7MTOVKSxFQdR_V3qxKeLI40nLIvQTfqzncVIV0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDE3LzM5/Ni84MTQvbm9uXzJ4/L25ldGZsaXgtbW9i/aWxlLWFwcGxpY2F0/aW9uLWxvZ28tZnJl/ZS1wbmcucG5n",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$28/hr",
    location: "Pune, India"
  },
  {
    id: 6,
    logo: "https://imgs.search.brave.com/BM3Ne6Pb2ARU7iMwpxJx42NfqI8AWRgQX_HDVw_SOp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTEvQXBw/bGUtTG9nby1CYWNr/Z3JvdW5kLVBORy5w/bmc",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Noida, India"
  },
  {
    id: 7,
    logo: "https://imgs.search.brave.com/ekkK-oGU7TLq3otbdM62tAx06xnA2KlD5WV_mUl5ZA4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS8yNS85LzMv/dGVsc2EtbG9nby10/ZXNsYS1sb2dvLWls/bHVzdHJhdGlvbi1E/QTlEdEpOV190Lmpw/Zw",
    companyName: "Tesla",
    datePosted: "7 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$20/hr",
    location: "Chennai, India"
  },
  {
    id: 8,
    logo: "https://imgs.search.brave.com/Sy5hJNpYG5dOaBy80ylX6nT0HYA_khMZARmls8T1qmU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEyL1Nw/b3RpZnktTG9nby1U/cmFuc3BhcmVudC1G/aWxlLnBuZw",
    companyName: "Spotify",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$35/hr",
    location: "Gurgaon, India"
  },
  {
    id: 9,
    logo: "https://imgs.search.brave.com/T5HE0uAi0zXg2Rf45GC-AJV0ZtPuKaBi3aOjNmRiIaE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQWRv/YmUtTG9nby1QTkct/UGljdHVyZS5wbmc",
    companyName: "Adobe",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hr",
    location: "Bangalore, India"
  },
  {
    id: 10,
    logo: "https://imgs.search.brave.com/1Tr6flknkh9Ds_Pe0o2H-RP3fJ31pgjBa1CcYNaUFZc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNC9VYmVy/LUxvZ28tUE5HLVBp/Y3R1cmUucG5n",
    companyName: "Uber",
    datePosted: "5 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$33/hr",
    location: "Mumbai, India"
  }
];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return (
          <div key={idx}>
            <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}  brandLogo={elem.logo} datePosted={elem.datePosted}/>
          </div>
        )
      })}
      
    </div>
  )
}

export default App