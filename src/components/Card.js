
const Card = () => {

  return(
    <>
    {/* {contactList?.map((contact, index)=>( */}

      <figure className="bg-white h-80 rounded-lg shadow-md pt-7">
        <img
          alt="contact"
          className="w-32 h-32 rounded-full mx-auto"
          src="https://randomuser.me/api/portraits/men/65.jpg"/>

        <figcaption className="text-center mt-5">
          <p classNam="text-gray-700 font-semibold text-xl mb-2">Angen Jolie</p>
          <p classNam="text-gray-500">
          email:ff@gmail.com
          </p>
          <p>(310)310-0211</p>
        </figcaption>
      </figure>
      <figure className="bg-white h-80 rounded-lg shadow-md pt-7">
        <img
          alt="contact"
          className="w-32 h-32 rounded-full mx-auto"
          src="https://randomuser.me/api/portraits/women/90.jpg"/>

        <figcaption className="text-center mt-5">
          <p classNam="text-gray-700 font-semibold text-xl mb-2">Angen Jolie</p>
          <p classNam="text-gray-500">
          email:ff@gmail.com
          </p>
          <p>(310)310-0211</p>
        </figcaption>
      </figure>

      <figure className="bg-white h-80 rounded-lg shadow-md pt-7">
        <img
          alt="contact"
          className="w-32 h-32 rounded-full mx-auto"
          src="https://randomuser.me/api/portraits/men/38.jpg"/>

        <figcaption className="text-center mt-5">
          <p classNam="text-gray-700 font-semibold text-xl mb-2">Angen Jolie</p>
          <p classNam="text-gray-500">
          email:ff@gmail.com
          </p>
          <p>(310)310-0211</p>
        </figcaption>
      </figure>
    </>
  )
}
export default Card;
