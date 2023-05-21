/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: "localhost:8081"
            },
            {
                hostname: "dqz5dwjvgn3kd.cloudfront.net"
            }
        ]
    }
}

module.exports = nextConfig
