import { Inter } from 'next/font/google'

import Star from 'shared/assets/icon/star.svg'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Text tag={'h1'} font={TextFontTheme.INTER_BOLD_XL} color={TextColorTheme.BLUE_600}>
        h1
      </Text>
      <Text tag={'h2'}>h2</Text>
      <Text tag={'h3'}>h3</Text>
      <Star />
    </>
  )
}
