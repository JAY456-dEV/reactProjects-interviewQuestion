import { useEffect, useState } from 'react'
import Otp from '../components/OtpEnter/otp'
// import Compo from '../components/compo'
import MultiSelect from '../components/multiSelectSearch/multiSelect'
import PasswordGen from '../components/passwordGen/passwordGen'
import ProgressBar from '../components/progressBar/progressbar'
import './App.css'
import TrelloMain from '../components/trello/trelloMain'
import Expense from '../components/expensetracker/expense'
import StepForm from '../components/multiStepForm/stepForm'
import SecForm from '../components/multiStepForm/secForm'
import ThirdForm from '../components/multiStepForm/thirdForm'
import Pagination from '../components/pagination/pagination'
import InfinteScroll from '../components/infinteScroll/infinteScroll'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Productlisting from '../components/breadcrumbs/productlisting'
import ProductDetail from '../components/breadcrumbs/productDetail'
import Home from '../components/breadcrumbs/Home'
import Breadcrumbs from '../components/breadcrumbs/bread'
import Toast from '../components/toastContainer/toast'
import Accordin from '../components/collapsibleAccordin/Accordin'
import Avatar from '../components/avatarPicker/avatar'
import Progress from '../components/progressBarwithAdd/progress'
import ToastNew from '../components/toast/toast'
import Practice from '../components/test/practice'
import PasswordLength from '../components/passwordLength/passwordLength'
import FormValidation from '../components/formValidation/formvalidation'
import SelectGrid from '../components/selectingGrid/selectGrid'
import CryptoConverter from '../components/cryptoConverter/cryptoConverter'
import NestedComment from '../components/NeastedComments/NestedComment'
import JobBoard from '../components/JobBoardGreatFrontEnd/jobBoard'
import LikeButton from '../components/LikeButton/likeButton'
import TrafficLight from '../components/trafficLight/TrafficLight'
import DigitalClock from '../components/DigitalClock/digitalClock'
import DataTable from '../components/dataTable/dataTable'

function App() {

  //start data for stepForm
  // const [pageForm, setPageForm] = useState(1)
  // const [formData, setFormData] = useState({})

  // switch (pageForm) {
  //   case 1:
  //     return (
  //       <StepForm formData={formData} setFormData={setFormData} setPageForm={setPageForm} />
  //     )

  //   case 2:
  //     return (
  //       <SecForm formData={formData} setFormData={setFormData} setPageForm={setPageForm} />
  //     )

  //   case 3: return (
  //     <ThirdForm formData={formData} setPageForm={setPageForm} />
  //   )
  //   default:
  //     break;
  // }
  // end

  {/* data for breadcrumbs  */ }


  {/* data for breadcrumbs end */ }

  return (
    <>
      {/* <ProgressBar /> */}
      {/* <Otp /> */}
      {/* <MultiSelect /> */}
      {/* <PasswordGen /> */}
      {/* <TrelloMain /> */}
      {/* <Expense /> */}
      {/* <Pagination /> */}
      {/* <InfinteScroll /> */}


      {/* data for breadcrumbs  */}

      {/* <BrowserRouter>
        <div>
          <Breadcrumbs />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Productlisting />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter> */}

      {/* data for breadcrumbs end */}
      {/* <Toast /> */}
      {/* <Accordin /> */}
      {/* <Avatar /> */}
      {/* <Progress /> */}
      {/* <ToastNew /> */}
      {/* <Practice /> */}
      {/* <PasswordLength /> */}
      {/* <FormValidation /> */}
      {/* <SelectGrid /> */}
      {/* <CryptoConverter /> */}
      {/* <NestedComment /> */}
      {/* <JobBoard /> */}
      {/* <LikeButton /> */}
      {/* <TrafficLight /> */}
      {/* <DigitalClock /> */}
      {/* <DataTable /> */}
    </>
  )
}

export default App
