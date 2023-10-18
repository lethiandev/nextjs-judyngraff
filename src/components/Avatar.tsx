import Image from 'next/image'

const Avatar = () => (
  <div className="relative overflow-hidden">
    <div className="absolute -bottom-[50%] -z-10 w-full">
      <div className="w-full rounded-full bg-lime-500 pb-[100%]"></div>
    </div>
    <Image src="/avatar.png" alt="Avatar" width={1780} height={1630} />
  </div>
)

export default Avatar
