# Debouncing: 

typing slow = 20ms
typing fast = 30ms

# Performace:
    - iphone pro max = 14 letter * 1000 = 14000
    - with debouncing = 3 API calls * 1000 = 3000

# Debouncing with 200ms:
    - if difference between 2 key stroke is < 200ms - DECLINE API CALL
    > 200ms make an API call

# Cache:
Time complexity to search in array = O(n)               [i, ip, iph, iphon]
Time complexity to search in object = O(1)              {i: , ip:, iph, iphon: }

new.Map();

# Handling live data
    -> Web sockets(Two way connection between UI & server)
            - Two directional
            - No regular interval
            - Application like Trading platform, WhatsApp-Live chat apps

    -> API Polling
            - Uni-directional data movement
            - Applications like Gmail, CrickBuzz(25s)
