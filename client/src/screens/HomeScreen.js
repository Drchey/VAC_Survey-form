import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost, getPosts } from '../redux/posts/postSlice'
import { reset } from '../redux/auth/authSlice'

const HomeScreen = () => {
  const [formData, setFormData] = useState({
    school_name: '',
    school_type: '',
    school_count: '',
    grad_count: '',
    verify_count: '',
    database_type: '',
    institution_store: '',
    transcript_generate: '',
    servers: '',
    servers_spec: '',
    uptime_service: '',
    lan_segment: '',
    service_providers: '',
    firewalls: '',
    site_site: '',
    system_integration: '',
    legacy_apps: '',
    legacy_apps_distribution: '',
    legacy_apps_version: '',
    disaster_recovery: '',
    disaster_recovery_strategy: '',
    web_emails: '',
    data_privacy: '',
    encryption_usage: '',
  })

  const {
    school_name,
    school_type,
    school_count,
    grad_count,
    verify_count,
    database_type,
    institution_store,
    transcript_generate,
    servers,
    servers_spec,
    uptime_service,
    lan_segment,
    service_providers,
    firewalls,
    site_site,
    system_integration,
    legacy_apps,
    legacy_apps_distribution,
    legacy_apps_version,
    disaster_recovery,
    disaster_recovery_strategy,
    web_emails,
    data_privacy,
    encryption_usage,
  } = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  const { isError, message } = useSelector((state) => state.posts)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const postData = {
      school_name,
      school_type,
      school_count,
      grad_count,
      verify_count,
      database_type,
      institution_store,
      transcript_generate,
      servers,
      servers_spec,
      uptime_service,
      lan_segment,
      service_providers,
      firewalls,
      site_site,
      system_integration,
      legacy_apps,
      legacy_apps_distribution,
      legacy_apps_version,
      disaster_recovery,
      disaster_recovery_strategy,
      web_emails,
      data_privacy,
      encryption_usage,
    }
    dispatch(createPost(postData))
    alert('Saved Successfully')
    setFormData({
      school_name: '',
      school_type: '',
      school_count: '',
      grad_count: '',
      verify_count: '',
      database_type: '',
      institution_store: '',
      transcript_generate: '',
      servers: '',
      servers_spec: '',
      uptime_service: '',
      lan_segment: '',
      service_providers: '',
      firewalls: '',
      site_site: '',
      system_integration: '',
      legacy_apps: '',
      legacy_apps_distribution: '',
      legacy_apps_version: '',
      disaster_recovery: '',
      disaster_recovery_strategy: '',
      web_emails: '',
      data_privacy: '',
      encryption_usage: '',
    })
  }

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    // if (!user) {
    //   navigate('/login')
    // } else {
    //   if (user.user.isDefaultPass) {
    //     navigate('/reset')
    //   }
    // }

    // dispatch(getPosts())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <Header />
      <div className="section">
        <p>Submit Your Questionnaire Response Here</p>

        <form onSubmit={onSubmit} style={{ marginTop: '40', padding: 20 }}>
          <div className="card bg-white p-3">
            <div className="form-group">
              <label>Institution Type</label>
              <select
                className="custom-select"
                name="school_type"
                value={school_type}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="polytechnic">POLYTECHNIC</option>
                <option value="university">UNIVERSITY</option>
                <option value="college_edu">COLLEGE OF EDUCATION</option>
              </select>
            </div>
            {/* University */}
            {school_type === 'university' ? (
              <div className="form-group">
                <label>Institution Name</label>
                <select
                  className="custom-select"
                  name="school_name"
                  value={school_name}
                  onChange={onChange}
                  required
                >
                  <option value="">Choose ...</option>
                  <option>Abubakar Tafawa Balewa University</option>
                  <option>Ahmadu Bello University Zaria</option>
                  <option>Air Force Institute of Technology</option>
                  <option>Alex Ekwueme University</option>
                  <option>Bayero University Kano</option>
                  <option>Federal University of Agriculture, Abeokuta</option>
                  <option>Federal University, Birnin Kebbi</option>
                  <option>Federal University, Dutse, Jigawa State</option>
                  <option>Federal University, Dutsin-Ma, Katsina</option>
                  <option>Federal University Gashua, Yobe</option>
                  <option>Federal University, Gusau Zamfara</option>
                  <option>Federal University, Kashere, Gombe State</option>
                  <option>Federal University, Lafia, Nasarawa State</option>
                  <option>Federal University, Lokoja, Kogi State</option>
                  <option>Federal University, Otuoke, Bayelsa</option>
                  <option>Federal University, Oye-Ekiti, Ekiti State</option>
                  <option>
                    Federal University of Petroleum Resources, Effurun
                  </option>
                  <option>Federal University of Technology, Akure</option>
                  <option>Federal University of Technology, Minna</option>
                  <option>Federal University of Technology, Owerri</option>
                  <option>Federal University, Wukari, Taraba State</option>
                  <option>
                    Michael Okpara University of Agricultural Umudike
                  </option>
                  <option>Modibbo Adama University of Technology, Yola</option>
                  <option>National Open University of Nigeria, Lagos</option>
                  <option>Nigeria Police Academy Wudil</option>
                  <option>Nigerian Army University Biu</option>
                  <option>Nigerian Defence Academy Kaduna</option>
                  <option>
                    Nigerian Maritime University Okerenkoko, Delta State
                  </option>
                  <option>Nnamdi Azikiwe University, Awka</option>
                  <option>Obafemi Awolowo University, Ile-Ife</option>
                  University of Abuja, Gwagwalada
                  <option>University of Agriculture, Makurdi</option>
                  <option>University of Benin</option>
                  <option>University of Calabar</option>
                  <option>University of Ibadan</option>
                  <option>University of Ilorin</option>
                  <option>University of Jos</option>
                  <option>University of Lagos</option>
                  <option>University of Maiduguri</option>
                  <option>University of Nigeria, Nsukka</option>
                  <option>University of Port-Harcourt</option>
                  <option>University of Uyo</option>
                  <option>Usumanu Danfodiyo University</option>
                  <option>Abia State University, Uturu</option>
                  <option>Adamawa State University Mubi</option>
                  <option>Adekunle Ajasin University, Akungba</option>
                  <option> Akwa Ibom State University, Ikot Akpaden</option>
                  <option> Ambrose Alli University, Ekpoma</option>
                  <option>Bauchi State University, Gadau</option>
                  <option>Benue State University, Makurdi</option>
                  <option>Borno State University, Maiduguri</option>
                  <option> Chukwuemeka Odumegwu Ojukwu University, Uli</option>
                  <option>
                    Cross River State University of Technology, Calabar
                  </option>
                  <option>Delta State University </option>
                  <option>
                    Delta State University of Science and Technology
                  </option>
                  <option>Eastern Palm University Ogboko, Imo State</option>
                  <option>Ebonyi State University, Abakaliki</option>
                  <option>Edo University Iyamo</option>
                  <option> Ekiti State University</option>
                  <option>
                    {' '}
                    Enugu State University of Science and Technology
                  </option>
                  <option> Gombe State Univeristy, Gombe</option>
                  <option>
                    Gombe State University of Science and Technology
                  </option>
                  <option>Ibrahim Badamasi Babangida University, Lapai</option>
                  <option>
                    Ignatius Ajuru University of Education,Rumuolumeni
                  </option>
                  <option>Imo State University, Owerri</option>
                  <option>Kaduna State University, Kaduna</option>
                  <option>
                    Kano University of Science & Technology, Wudil
                  </option>
                  <option>
                    Kebbi State University of Science and Technology, Aliero
                  </option>
                  <option>Kogi State University Anyigba</option>
                  <option>Kwara State University, Ilorin</option>
                  <option>
                    Ladoke Akintola University of Technology, Ogbomoso
                  </option>
                  <option>Lagos State University, Ojo</option>
                  <option>
                    Moshood Abiola University of Science and Technology Abeokuta
                  </option>
                  <option></option>
                  <option>Niger Delta University Yenagoa</option>
                  <option>Olabisi Onabanjo University, Ago Iwoye</option>
                  <option>Ondo State University of Medical Sciences</option>
                  <option>
                    Ondo State University of Science and Technology Okitipupa
                  </option>
                  <option>Osun State University Osogbo</option>
                  <option>Oyo State Technical University Ibadan</option>
                  <option>Plateau State University Bokkos</option>
                  <option>River State University</option>
                  <option>Sokoto State University</option>
                  <option>Sule Lamido University, Kafin Hausa, Jigawa</option>
                  <option>Tai Solarin University of Education Ijebu Ode</option>
                  <option>Taraba State University, Jalingo</option>
                  <option>Umar Musa Yar' Adua University Katsina</option>
                  <option>University of Africa Toru Orua, Bayelsa State</option>
                  <option>Yobe State University, Damaturu</option>
                  <option>Yusuf Maitama Sule University Kano</option>
                  <option>Zamfara State University</option>
                  <option>Achievers University, Owo</option>
                  <option>Adeleke University, Ede</option>
                  <option>Admiralty University, Ibusa Delta State</option>
                  <option>
                    Afe Babalola University, Ado-Ekiti - Ekiti State
                  </option>
                  <option>
                    {' '}
                    African University of Science & Technology, Abuja
                  </option>
                  <option>Ajayi Crowther University, Ibadan</option>
                  <option>Al-Hikmah University, Ilorin</option>
                  <option>Al-Qalam University, Katsina</option>
                  <option>American University of Nigeria, Yola</option>
                  <option>Anchor University Ayobo Lagos State</option>
                  <option>
                    Arthur Javis University Akpoyubo Cross river State
                  </option>
                  <option>Atiba University Oyo</option>
                  <option>Augustine University</option>
                  <option>Babcock University,Ilishan-Remo</option>
                  <option>Baze University</option>
                  <option>Bells University of Technology, Otta</option>
                  <option>Benson Idahosa University, Benin City</option>
                  <option> Bingham University, New Karu</option>
                  <option>Bowen University, Iwo</option>
                  <option>Caleb University, Lagos</option>
                  <option>Caritas University, Enugu</option>
                  <option>Chrisland University</option>
                  <option>Christopher University Mowe</option>
                  <option>Clifford University Owerrinta Abia State</option>
                  <option>Coal City University Enugu State</option>
                  <option>Covenant University Ota</option>
                  <option>Crawford University Igbesa</option>
                  <option>Crescent University</option>
                  <option>Crown Hill University Eiyenkorin, Kwara State</option>
                  <option>Dominican University Ibadan Oyo State</option>
                  <option>Edwin Clark University, Kaigbodo</option>
                  <option>
                    Eko University of Medical and Health Sciences Ijanikin,
                    Lagos
                  </option>
                  <option>Elizade University, Ilara-Mokin</option>
                  <option>Evangel University, Akaeze</option>
                  <option>Fountain Unveristy, Oshogbo</option>
                  <option>
                    Godfrey Okoye University, Ugwuomu-Nike - Enugu State
                  </option>
                  <option>Gregory University, Uturu</option>
                  <option>Hallmark University, Ijebi Itele, Ogun</option>
                  <option>Hezekiah University, Umudi</option>
                  <option>Igbinedion University Okada</option>
                  <option>Joseph Ayo Babalola University, Ikeji-Arakeji</option>
                  <option>Kola Daisi University Ibadan, Oyo State</option>
                  <option>Kings University, Ode Omu</option>
                  <option>Kwararafa University, Wukari</option>
                  <option>Landmark University, Omu-Aran.</option>
                  <option>Lead City University, Ibadan</option>
                  <option>Legacy University, Okija Anambra State</option>
                  <option>Madonna University, Okija</option>
                  <option>Mcpherson University, Seriki Sotayo, Ajebo</option>
                  <option>Micheal & Cecilia Ibru University</option>
                  <option>Mountain Top University</option>
                  <option>Nile University of Nigeria, Abuja</option>
                  <option>Novena University, Ogume</option>
                  <option>Obong University, Obong Ntak</option>
                  <option>Oduduwa University, Ipetumodu - Osun State</option>
                  <option>
                    PAMO University of Medical Sciences, Portharcourt
                  </option>
                  <option>Pan-Atlantic University, Lagos</option>
                  <option>Paul University, Awka - Anambra State</option>
                  <option>Precious Cornerstone University, Oyo</option>
                  <option>Redeemer's University, Ede</option>
                  <option>Renaissance University, Enugu</option>
                  <option>Rhema University, Obeama-Asa - Rivers State</option>
                  <option>Ritman University, Ikot Ekpene, Akwa Ibom</option>
                  <option>Salem University, Lokoja</option>
                  <option>Samuel Adegboyega University, Ogwa.</option>
                  <option>Skyline University, Kano</option>
                  <option>Southwestern University, Oku Owa</option>
                  <option>Spiritan University, Nneochi Abia State</option>
                  <option>Summit University</option>
                  <option>Tansian University, Umunya</option>
                  <option>University of Mkar, Mkar</option>
                  <option>Veritas University, Abuja</option>
                  <option>
                    Wellspring University, Evbuobanosa - Edo State
                  </option>
                  <option>
                    Wesley University. of Science & Technology, Ondo
                  </option>
                  <option>Western Delta University, Oghara Delta State</option>
                </select>
              </div>
            ) : null}

            {school_type === 'polytechnic' ? (
              <div className="form-group">
                <label>Institution Name</label>
                <select
                  className="custom-select"
                  name="school_name"
                  value={school_name}
                  onChange={onChange}
                  required
                >
                  <option value="">Choose ...</option>
                  <option>
                    Akanu Ibiam Federal Polytechnic Unwana, Ebonyi State
                  </option>
                  <option>
                    {' '}
                    Airforce Institute of Technology (AFIT),NAF Base Kaduna
                  </option>
                  <option>Auchi Polytechnic, Auchi, Edo State</option>
                  <option>Federal Polytechnic Ado Ekiti, Ekiti State</option>
                  <option>Federal Polytechnic Bali, Taraba State</option>
                  <option>Federal Polytechnic Bauchi </option>
                  <option>Federal Polytechnic Bida, Niger State.</option>
                  <option> Polytechnic Damaturu, Yobe State</option>
                  <option>Federal Polytechnic Ede, Osun State</option>
                  <option>Federal Polytechnic Ekowe, Bayelsa State</option>
                  <option>Federal Polytechnic Idah, Kogi State</option>
                  <option>Federal Polytechnic Ilaro, Ogun State</option>
                  <option>Federal Polytechnic Ile-Oluji, Ondo State</option>
                  <option>
                    Federal Polytechnic Kaura Namoda, Zamfara State
                  </option>
                  <option>Federal Polytechnic Mubi, Adamawa State</option>
                  <option>Federal Polytechnic Nasarawa, Nasarawa State</option>
                  <option>Federal Polytechnic Nekede, Owerri, Imo State</option>
                  <option>Federal Polytechnic Offa, Kwara State</option>
                  <option>Federal Polytechnic Oko, Anambra State</option>
                  <option>
                    Federal Polytechnic of Oil and Gas Bonny, Rivers State
                  </option>
                  <option> Abdu Gusau Polytechnic, Zamfara</option>
                  <option> Abia State Polytechnic</option>
                  <option>Abraham Adesanya Polytechnic, Ogun</option>
                  <option>Abubakar Tatari Ali Polytechnic, Bauchi</option>
                  <option>Adamawa State Polytechnic, Yola</option>
                  <option>Akwa Ibom State College of Art & Science</option>
                  <option> Akwa Ibom State Polytechnic</option>
                  <option>Bayelsa State College of Arts and Science</option>
                  <option>Benue State Polytechnic</option>
                  <option>Binyaminu Usman Polytechnic, Jigawa</option>
                  <option>
                    {' '}
                    Cross River State Institute of Technology And Management
                  </option>
                  <option>D.S. Adegbenro ICT Polytechnic, Ogun</option>
                  <option> Delta State Polytechnic</option>
                  <option> Delta State Polytechnic, Otefe-Oghara</option>
                  <option>Delta State Polytechnic, Ogwashi-Uku</option>
                  <option>
                    Edo State Institute of Technology and Management
                  </option>
                  <option>Gateway Polytechnic Ogun</option>
                  <option>Hassan Usman Katsina Polytechnic (HUK)</option>
                  <option>Ibarapa Polytechnic Oyo</option>
                  <option>Imo State Polytechnic</option>
                  <option>Institute of Management and Technology, Enugu</option>
                  <option>Jigawa State Polytechnic, Dutse</option>
                  <option>Kano State Polytechnic </option>
                  <option>Ken Sarowiwa Polytechnic, Rivers</option>
                  <option>Kogi State Polytechnic</option>
                  <option>Kwara State Polytechnic</option>
                  <option>Lagos State Polytechnic</option>
                  <option>Mai-Idris Alooma Polytechnic, Yobe</option>
                  <option>Nasarawa State Polytechnic</option>
                  <option>Niger State Polytechnic</option>
                  <option>Nuhu Bamalli Polytechnic, Kaduna</option>
                  <option>Ogun State Institute of Technology</option>
                  <option>Ogun State Polytechnic </option>
                  <option> Oke-Ogun Polytechnic, Oyo</option>
                  <option>Osun State College of Technology</option>
                  <option>Osun State Polytechnic</option>
                  <option>Plateau State Polytechnic</option>
                  <option>Port-Harcourt Polytechnic</option>
                  <option>Ramat Polytechnic, Maiduguri,</option>
                  <option>Rufus Giwa Polytechnic, Ondo</option>
                  <option>The Polytechnic Ibadan, Oyo</option>
                  <option>Umaru Ali Shinkafi Polytechnic, Sokoto</option>
                  <option>Zamfara State College of Arts and Science</option>
                  <option>Al-Hikma Polytechnic Karu, Nasarawa</option>
                  <option>Allover Central Polytechnic, Ogun</option>
                  <option>Ajayi Polytechnic Ikere Ekiti</option>
                  <option>Ashi Polytechnic, Benue</option>
                  <option>Best Solution Polytechnic, Ondo</option>
                  <option>Bolmor Polytechnic, Oyo</option>
                  <option>Calvary Polytechnic, Delta</option>
                  <option>Citi Polytechnic, FCT Abuja</option>
                  <option>College of Technology, Iresi, Osun </option>
                  <option>Covenant Polytechnic, Abia</option>
                  <option>Crown Polytechnic, Ekiti</option>
                  <option>Dorben Polytechnic, Abuja</option>
                  <option>Eastern Polytechnic, Rivers</option>
                  <option>Fidei Polytechnic, Benue</option>
                  <option>Gboko Polytechnic, Benue</option>
                  <option>Global Polytechnic, Ondo</option>
                  <option>Grace Polytechnic, Lagos </option>
                  <option>Heritage Polytechnic, Akwa Ibom</option>
                  <option>Ibadan City Polytechnic, Oyo</option>
                  <option>Igbajo Polytechnic, Osun</option>
                  <option>Interlink Polytechnic, Osun</option>
                  <option>Kalac Christal Polytechnic, Lagos</option>
                  <option>Kings Polytechnic, Edo</option>
                  <option>Landmark Polytechnic, Ogun</option>
                  <option>Lagos City Polytechnic</option>
                  <option>Lens Polytechnic, Kwara </option>
                  <option>Lighthouse Polytechnic, Edo </option>
                  <option>Marist Polytechnic, Enugu</option>
                  <option>Mater Dei Polytechnic</option>
                  <option>Nacabs Polytechnic, Nasarawa </option>
                  <option>Nogak Polytechnic, Cross River </option>
                  <option>
                    Our Saviour Institute of Science, Agriculture & Technology,
                    Enugu
                  </option>
                  <option>Prime Polytechnic, Kogi</option>
                  <option>
                    Redeemers College of Technology and Management (RECTEM),
                    Ogun
                  </option>
                  <option>Ronik Polytechnic, Lagos</option>
                  <option>Saf Polytechnic, Oyo</option>
                  <option>Savanah Institute of Technology, Ebonyi </option>
                  <option>Shaka Polytechnic</option>
                  <option>St. Mary Polytechnic, Niger </option>
                  <option>Sure Foundation Polytechnic, Akwa Ibom</option>
                  <option>Temple Gate Polytechnic, Abia</option>
                  <option>The Polytechnic, Igbo-Owu, Kwara</option>
                  <option>The Polytechnic, Ile-Ife, Osun</option>
                  <option>The Polytechnic, Imesi-Ile, Osun</option>
                  <option>The Polytechnic Otada Adoka, Benue</option>
                  <option>Tower Polytechnic, Ibadan</option>
                  <option>Trinity Polytechnic Uyo, Akwa Ibom</option>
                  <option>Uma Ukpai Polytechnic, Abia</option>
                  <option>Uyo City Polytechnic, Akwa Ibom</option>
                  <option>Valley View Polytechnic, Abia</option>
                  <option>Wolex Polytechnic, Osun</option>
                </select>
              </div>
            ) : null}

            {school_type === 'college_edu' ? (
              <div className="form-group">
                <label>Institution Name</label>
                <select className="custom-select">
                  <option value="">Choose...</option>
                  <option>Adeyemi College of Education, Ondo</option>
                  <option>Alvan Ikoku College of Education, Owerri</option>
                  <option>
                    Federal College of Education (Technical), Asaba
                  </option>
                  <option>Federal College of Education, Kano</option>
                  <option>Federal College of Education (Special), Oyo</option>
                  <option>Federal College of Education, Abeokuta</option>
                  <option>
                    Federal College of Education, Eha-Amufu, Enugu
                  </option>
                  <option>
                    Federal College of Education (Technical), Gombe
                  </option>
                  <option>
                    Federal College of Education, Kontagora, Niger
                  </option>
                  <option>Federal College of Education, Okene</option>
                  <option>
                    Federal College of Education (Technical), Omoku
                  </option>
                  <option>
                    Federal College of Education (Tech), Potiskum, Yobe
                  </option>
                  <option>
                    Federal College of Education (Technical), Akoka, Lagos
                  </option>
                  <option>
                    Federal College of Education (Technical), Bichi, Kano
                  </option>
                  <option>
                    Federal College of Education (Technical), Gusau, Zamfara
                  </option>
                  <option>Federal College of Education, Katsina</option>
                  <option>
                    {' '}
                    Federal College of Education, Obudu, Cross River
                  </option>
                  <option>
                    Federal College of Education, Pankshin, Plateau
                  </option>
                  <option>Federal College of Education, Yola</option>
                  <option>Federal College of Education, Zaria, Kaduna</option>
                  <option>Federal College of Education (T), Umunze</option>
                  <option>
                    Nigerian Army School of Education (NASE), Kwara
                  </option>
                  <option> Adamawa State College of Education</option>
                  <option>Adamu Augie College of Education, Kebbi</option>
                  <option>
                    Adeniran Ogunsanya College of Education, Lagos
                  </option>
                  <option> Akwa Ibom State College of Education</option>
                  <option> College of Education, Arochukwu, Abia</option>
                  <option> College of Education, Azare, Bauchi</option>
                  <option>College of Education, Ekiadolor-Benin, Edo</option>
                  <option>College of Education, Gashua, Damaturu, Yobe</option>
                  <option>College of Education, Gindiri, Plateau</option>
                  <option>College of Education, Ila-Orangun, Osun</option>
                  <option>College of Education, Ikere-Ekiti</option>
                  <option>College of Education, Jalingo, Taraba</option>
                  <option>College of Education, Katsina-Ala, Benue</option>
                  <option>
                    College of Education (Technical), Lafiagi, Kwara
                  </option>
                  <option>College of Education, Waka BIU, Borno</option>
                  <option>College of Education, Warri</option>
                  <option>Cross River State Coll. of Education</option>
                  <option>Delta State College of Education, Agbor</option>
                  <option>Delta State Coll. of Physical Education</option>
                  <option>Ebonyi State College of Education</option>
                  <option>Edo State College of Education</option>
                  <option>
                    Emmanuel Alayande College of Education (EACOED), Oyo
                  </option>
                  <option>Enugu State Coll. of Education (T)</option>
                  <option>FCT College of Education, Zuba</option>
                  <option>Isaac Jasper Boro COE, Sagbama, Bayelsa</option>
                  <option>
                    Isa Kaita College of Education, Dutsin-Ma, Katsina
                  </option>
                  <option>Jama'Atu College of Education (JACE), Kaduna</option>
                  <option>Jigawa State College of Education</option>
                  <option> Kaduna State College of Education</option>
                  <option>Kashim Ibrahim College of Educ., Maiduguri</option>
                  <option>Kogi State College of Education, Kabba</option>
                  <option>Kogi State College of Education, Ankpa</option>
                  <option>Kwara State College of Education, Ilorin</option>
                  <option>Kwara State College of Education, Oro</option>
                  <option>
                    {' '}
                    Michael Otedola Coll. of Prim. Education, Lagos
                  </option>
                  <option>Nasarrawa State College of Education</option>
                  <option>Niger State College of Education</option>
                  <option>Nwafor Orizu College of Education, Anambra</option>
                  <option>Osisatech College of Education, Enugu</option>
                  <option>Osun State College of Education</option>
                  <option>Rivers College of Education</option>
                  <option>Sa'adatu Rimi College of Education, Kano</option>
                  <option>Shehu shagari College of Education, Sokoto</option>
                  <option>
                    St. Augustine College of Education (Project Time), Lagos
                  </option>
                  <option>Tai Solarin College of Education, Ogun</option>
                  <option>
                    {' '}
                    Umar Ibn Ibrahim El-Kanemi College of Education, Science and
                    Technology, Borno
                  </option>
                  <option>Zamfara State College of Education</option>
                  <option>African Thinkers Community of Inquiry, Enugu</option>
                  <option>Ansar-Ud-Deen College of Education, Isolo</option>
                  <option>
                    Bauchi Institute of Arabic & Islamic Studies, Bauchi
                  </option>
                  <option>City College of Education, Mararaba, Gurku</option>
                  <option>College of Education, Offa</option>
                  <option>Corner Stone College of Education, lagos</option>
                  <option>Delar College of Education</option>
                  <option>Diamond College of Education, Aba</option>
                  <option>ECWA College of Education, Jos (ECOEJ)</option>
                  <option>Havard Wilson College of Education, Aba</option>
                  <option>
                    Institute of Ecumenical Education, (Thinkers Corner), Enugu
                  </option>
                  <option>
                    Kinsey College of Education, Ilorin, Kwara State
                  </option>
                  <option>Muftau Olanihun College of Education, Ibadan</option>
                  <option>Muhyideen College of Education, Ilorin</option>
                  <option>OSISA Tech. Coll. of Education, Enugu</option>
                  <option>Peaceland College of Education, Enugu</option>
                  <option>St. Augustine Coll. of Education, Lagos</option>
                  <option>The College of Education, Nsukka</option>
                  <option>Unity College of Education, Auka Adoka, Benue</option>
                  <option>Yewa Central College of Education, Ayetoro</option>
                </select>
              </div>
            ) : null}

            <div className="form-group">
              <label>Average Graduatants per Year</label>
              <input
                type="number"
                className="form-control"
                placeholder="Average Graduants Per Year (Appr)"
                name="grad_count"
                value={grad_count}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Average No of Verfication Requests per Year</label>
              <input
                type="number"
                className="form-control"
                placeholder="No of Verifications (Appr)"
                name="verify_count"
                value={verify_count}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="card bg-white p-3 mt-3">
            <span className="text-success"> Storage & Database</span>
            <div className="form-group">
              <label> Average Number of Students</label>
              <input
                type="number"
                className="form-control"
                placeholder="Institution's Student Count (Appr)"
                name="school_count"
                value={school_count}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Database Storage (Cloud, On Prem or Both)</label>
              <select
                className="custom-select"
                name="database_type"
                value={database_type}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="on_prem">ON PREMISES</option>
                <option value="cloud">CLOUD</option>
                <option value="both">BOTH</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                How Does the Institution Store Student's Certificates
              </label>
              <select
                className="custom-select"
                name="institution_store"
                value={institution_store}
                onChange={onChange}
              >
                <option value="">Choose...</option>
                <option value="manual">MANUAL</option>
                <option value="digital">DIGITAL</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>

            <div className="form-group">
              <label>How Does the Institution Provision TranScripts</label>
              <select
                className="custom-select"
                name="transcript_generate"
                value={transcript_generate}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="manual">MANUAL</option>
                <option value="digital">DIGITAL</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>
          </div>
          <div className="card bg-white p-3 mt-3">
            <span className="text-primary"> Server Requirements</span>
            <div className="form-group">
              <label>How Does the Institution Have Servers</label>
              <select
                className="custom-select"
                name="servers"
                value={servers}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="servers_spec"
                value={servers_spec}
                onChange={onChange}
                placeholder="Please enter the Specifications, Enter Nil if None"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="IT Services (Uptime in Percentages)"
                name="uptime_service"
                value={uptime_service}
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="card bg-white p-3 mt-3">
            <span className="text-danger">NetWork</span>
            <div className="form-group">
              <label>How Does the Institution Have LAN Segmentation</label>
              <select
                className="custom-select"
                name="lan_segment"
                value={lan_segment}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>
            <div className="form-group">
              <label>How Does the Institution Have Internet Service</label>
              <select
                className="custom-select"
                name="service_providers"
                value={service_providers}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>
            <div className="form-group">
              <label>Firewalls ?</label>
              <select
                className="custom-select"
                name="firewalls"
                value={firewalls}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>

            <div className="form-group">
              <label>Firewalls capable of VPN Site-Site Connection ?</label>
              <select
                className="custom-select"
                name="site_site"
                value={site_site}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>
            <div className="form-group">
              <label>Adequate In-house Capability</label>
              <select
                className="custom-select"
                name="system_integration"
                value={system_integration}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>
          </div>

          <div className="card bg-white p-3 mt-3">
            <span className="text-success">Processing Systems</span>
            <div className="form-group">
              <label>Legacy Apps</label>
              <select
                className="custom-select"
                name="legacy_apps"
                value={legacy_apps}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>
            <div className="form-group">
              <label>Please Identify Legacy Apps</label>
              <input
                type="text"
                className="form-control"
                value={legacy_apps_distribution}
                onChange={onChange}
                name="legacy_apps_distribution"
                required
              />
            </div>
            <div className="form-group">
              <label>Please Identify Legacy App Versions</label>
              <input
                type="text"
                className="form-control"
                value={legacy_apps_version}
                onChange={onChange}
                name="legacy_apps_version"
                required
              />
            </div>
            <div className="form-group">
              <label>Disaster Recovery Site</label>
              <select
                className="custom-select"
                name="disaster_recovery"
                value={disaster_recovery}
                onChange={onChange}
                required
              >
                <option value="">Choose...</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>

            <div className="form-group">
              <label>Identify Disaster Recovery Strategy</label>
              <input
                type="text"
                className="form-control"
                name="disaster_recovery_strategy"
                value={disaster_recovery_strategy}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label>Web Emails ?</label>
              <select
                className="custom-select"
                name="web_emails"
                value={web_emails}
                onChange={onChange}
              >
                <option value="">Choose...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="card bg-white p-3 mt-3">
            <span className="text-primary">Data Privacy & Security</span>
            <div className="form-group">
              <label>
                Identify Measures Taken to Ensure Data Privacy & Security
              </label>
              <input
                type="text"
                className="form-control"
                value={data_privacy}
                onChange={onChange}
                name="data_privacy"
                required
              />
            </div>

            <div className="form-group">
              <label>Does School use encryption in transit ?</label>
              <select
                className="custom-select"
                name="encryption_usage"
                value={encryption_usage}
                onChange={onChange}
              >
                <option value="">Choose...</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
                <option value="unclear">UNCLEAR</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-success mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default HomeScreen
