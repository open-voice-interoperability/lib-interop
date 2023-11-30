// "utterance"
// The conversation continues by both parties exchanging natural language
//    utterances. The conversation continues until the Assistant conversing
//    with the human sends a "bye" event
//
// These are patterns for the GENERAL OVON ENVELOPES
// This is the OVON envelope to CONTINUE TALKING with the same Assistant
//
// The following is the ABSOLUTE MINIMUM for the SandBox(20231018)

const OVON_RespondSuperMin = {
    "ovon": {
        "conversation": {
            "id": "someUniqueIdCreatedByTheFirstParticipant"
        },
        "sender": {
            "from": "https://someBotThatOfferedTheUtterance.com"
        },
        "responseCode" : { "code": 200} ,
        "events": [
            {
                "eventType": "utterance",
                "parameters": {
                    "dialogEvent": {
                        "speakerId": "humanOrAssistantID",
                        "span": { "startTime": "2023-06-14 02:06:07+00:00" },
                        "features": {
                            "text": {
                                "mimeType": "text/plain",
                                "tokens": [ { "value": "OK. I'll pass you over to pharmacy dot com."  } ]
                            }
                        }
                    }
                }
            }
        ]
    }
}

// Note: The Assistant might send "Hello I am the weatherman."
//    Then the human/browser might send "What is the weather in Detroit?"
//    Then the Assistant might send "It is rainy in Detroit."
//    (This continues until the task is complete. Usually the human says something like "thanks I'm done".)
