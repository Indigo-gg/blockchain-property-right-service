import Mock from 'mockjs'

const Random = Mock.Random
const mobile = Random.integer(10198788990, 19987999876)
const yibai = Random.integer(0, 100)

export function setMock () {
  Random.extend({
    rightStatus: function () {
      const workStatus = [1, 2, 3]
      return this.pick(workStatus)
    },
    isBool: function () {
      const workStatus = [0, 1]
      return this.pick(workStatus)
    },
    reportStatus: function () {
      const reportStatus = [1, 2, 3]
      return this.pick(reportStatus)
    },
    hallStatus: function () {
      const workStatus = [0, 1, 2]
      return this.pick(workStatus)
    },
    releaseStatus: function () {
      const status = [5, 6]
      return this.pick(status)
    },
    ownShare: function () {
      const status = [10, 20, 30, 40, 50, 60, 70, 80, 90]
      return this.pick(status)
    }
  })

// const mockList = Mock.mock({
//   'data|20': [{
//     'author|1-2': [
//       {
//         'contribution|20-80': 1,
//         'avatar': Random.image(),
//         'userId|+1': 10,
//         'username': '@name'
//       }
//     ],
//     'name': '@cword(1,5)',
//     'id': 1,
//     'type': 1,
//     'fileId': '@image()'
//   }]
// })
// console.log('mockList', mockList)

  /**
   *weGetBlockList
   */
  Mock.mock(/\/monitor\/webase\/BlockList/, {
    'msg': 'ok',
    'fail': false,
    'total': 1,
    'code': 0,
    'data': [
      {
        'code': 0,
        'data': [
          {
            'sealerIndex': 0,
            'sealer': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
            'modifyTime': '2023-04-05 21:22:36',
            'createTime': '2023-04-05 21:22:36',
            'transCount': 1,
            'blockNumber': 444,
            'blockTimestamp': '2023-04-05 21:22:28',
            'pkHash': '0x83a25934f564ae3129d14d8fbfc218c4d8c7ae79fb69925a4413e744ad8d431b'
          },
          {
            'sealerIndex': 0,
            'sealer': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
            'modifyTime': '2023-04-05 21:22:36',
            'createTime': '2023-04-05 21:22:36',
            'transCount': 1,
            'blockNumber': 445,
            'blockTimestamp': '2023-04-05 21:22:29',
            'pkHash': '0x4f92013131cc104f705ff22a23fd244c2e405b88178793a7b274c7e051fe95b0'
          },
          {
            'sealerIndex': 0,
            'sealer': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
            'modifyTime': '2023-04-05 21:22:36',
            'createTime': '2023-04-05 21:22:36',
            'transCount': 1,
            'blockNumber': 444,
            'blockTimestamp': '2023-04-05 21:22:28',
            'pkHash': '0x83a25934f564ae3129d14d8fbfc218c4d8c7ae79fb69925a4413e744ad8d431b'
          },
          {
            'sealerIndex': 0,
            'sealer': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
            'modifyTime': '2023-04-05 21:22:36',
            'createTime': '2023-04-05 21:22:36',
            'transCount': 1,
            'blockNumber': 445,
            'blockTimestamp': '2023-04-05 21:22:29',
            'pkHash': '0x4f92013131cc104f705ff22a23fd244c2e405b88178793a7b274c7e051fe95b0'
          },
          {
            'sealerIndex': 0,
            'sealer': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
            'modifyTime': '2023-04-05 21:22:36',
            'createTime': '2023-04-05 21:22:36',
            'transCount': 1,
            'blockNumber': 444,
            'blockTimestamp': '2023-04-05 21:22:28',
            'pkHash': '0x83a25934f564ae3129d14d8fbfc218c4d8c7ae79fb69925a4413e744ad8d431b'
          },
          {
            'sealerIndex': 0,
            'sealer': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
            'modifyTime': '2023-04-05 21:22:36',
            'createTime': '2023-04-05 21:22:36',
            'transCount': 1,
            'blockNumber': 445,
            'blockTimestamp': '2023-04-05 21:22:29',
            'pkHash': '0x4f92013131cc104f705ff22a23fd244c2e405b88178793a7b274c7e051fe95b0'
          },
          {
            'sealerIndex': 0,
            'sealer': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
            'modifyTime': '2023-04-05 21:22:36',
            'createTime': '2023-04-05 21:22:36',
            'transCount': 1,
            'blockNumber': 444,
            'blockTimestamp': '2023-04-05 21:22:28',
            'pkHash': '0x83a25934f564ae3129d14d8fbfc218c4d8c7ae79fb69925a4413e744ad8d431b'
          },

          {
            'sealerIndex': 2,
            'sealer': '4822af30b02630bdb37693cb82edc4d328c0470c5fec372727666d8dd2283b7222267b99d544d907f8823d508913025fb1d456fa428a1dea4f79593d68ff264e',
            'modifyTime': '2023-04-05 21:21:35',
            'createTime': '2023-04-05 21:21:35',
            'transCount': 1,
            'blockNumber': 441,
            'blockTimestamp': '2023-04-05 21:21:08',
            'pkHash': '0xfbfed29b748e9300c8367531030e762c1a3ad0aa687915edce6298978b1f3c19'
          },
          {
            'sealerIndex': 3,
            'sealer': '56a03dcda5905515fded9e4f0933b952be4657bdcca1df3276b633f3059122cd0736df09d0bda6bc1d5edcffc44fa0bbd5a0e31ffa26ccd64117f94419abb620',
            'modifyTime': '2023-04-05 21:11:05',
            'createTime': '2023-04-05 21:11:05',
            'transCount': 1,
            'blockNumber': 440,
            'blockTimestamp': '2023-04-05 21:10:39',
            'pkHash': '0x559d498841cd27d8b773aedbd10dfa3e3082a29601f6ebea026e22c8184c43b2'
          },
          {
            'sealerIndex': 2,
            'sealer': '4822af30b02630bdb37693cb82edc4d328c0470c5fec372727666d8dd2283b7222267b99d544d907f8823d508913025fb1d456fa428a1dea4f79593d68ff264e',
            'modifyTime': '2023-04-05 21:11:04',
            'createTime': '2023-04-05 21:11:04',
            'transCount': 1,
            'blockNumber': 439,
            'blockTimestamp': '2023-04-05 21:10:38',
            'pkHash': '0x837567f21d9de3fbab6535c0717af2440b363f70ee184835715d960b4b0eae66'
          },
          {
            'sealerIndex': 1,
            'sealer': '192350db573a1f953fa07f005b018522905c140eee1ececedbbf8397b44684e617d9d49f6313ccd99273ddaf56dc4027370b708cb99d570fc867319ab13f2bdb',
            'modifyTime': '2023-04-05 21:11:04',
            'createTime': '2023-04-05 21:11:04',
            'transCount': 1,
            'blockNumber': 438,
            'blockTimestamp': '2023-04-05 21:10:38',
            'pkHash': '0x68134f73c892d1dbadb5167231cbf9e7eea7c75f5201fc0c9fdd29fd7ebb945a'
          },
          {
            'sealerIndex': 0,
            'sealer': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
            'modifyTime': '2023-04-05 21:11:04',
            'createTime': '2023-04-05 21:11:04',
            'transCount': 1,
            'blockNumber': 437,
            'blockTimestamp': '2023-04-05 21:10:37',
            'pkHash': '0x335eaeda7a4257ba2acd431d600fbf29d57fdf0745f4ab04a76e013c7922c8d6'
          },
          {
            'sealerIndex': 3,
            'sealer': '56a03dcda5905515fded9e4f0933b952be4657bdcca1df3276b633f3059122cd0736df09d0bda6bc1d5edcffc44fa0bbd5a0e31ffa26ccd64117f94419abb620',
            'modifyTime': '2023-04-05 21:11:04',
            'createTime': '2023-04-05 21:11:04',
            'transCount': 1,
            'blockNumber': 436,
            'blockTimestamp': '2023-04-05 21:10:36',
            'pkHash': '0x39569938eec1dcf9f8b134bfaebe44e7316909da20a5f923a98a9b732fe6f539'
          }
        ],
        'message': 'success',
        'totalCount': 456
      }
    ],
    'extraData': null,
    'time': 1680701322882,
    'ok': true
  })

  /**
   *weGetTransList
   */
  Mock.mock(/\/monitor\/webase\/TransList/, {
    'msg': 'ok',
    'fail': false,
    'total': 1,
    'code': 0,
    'data': [
      [
        {
          'modifyTime': '2023-04-05 20:53:03',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:53:03',
          'transHash': '0xe0e5cdaec03c6f3a01bcbe91b39b6946f612527ac64329ef29916c2c97faf484',
          'transTo': '0xd3f33d23d7a21ebb89a27797572764764aae9e9b',
          'blockNumber': 433,
          'blockTimestamp': '2023-04-05 20:53:00',
          'transFrom': '0x87815d09e47af44285306eeeac1b142a700c5dfc'
        },
        {
          'modifyTime': '2023-04-05 20:53:03',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:53:03',
          'transHash': '0x45fd52482a1dedb23f8f4b6716208766d06b5c53a39dda0fc9ffbc107ddbdb1b',
          'transTo': '0x5059e1e378d011313cb4ce5cd203421dfc18bddb',
          'blockNumber': 432,
          'blockTimestamp': '2023-04-05 20:53:00',
          'transFrom': '0x87815d09e47af44285306eeeac1b142a700c5dfc'
        },
        {
          'modifyTime': '2023-04-05 20:53:03',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:53:03',
          'transHash': '0xc61a77e5eaacb22f98d658f86c1dc6542b940701c1b2b8267e2a85d27ecba6aa',
          'transTo': '0x5059e1e378d011313cb4ce5cd203421dfc18bddb',
          'blockNumber': 431,
          'blockTimestamp': '2023-04-05 20:52:59',
          'transFrom': '0xc852590f79705ba148d27a181317c5d4d9f4f7fc'
        },
        {
          'modifyTime': '2023-04-05 20:53:02',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:53:02',
          'transHash': '0xd6bd14f6747910f2c901485519351f6a385d38da28cc3cf6e45e3be3ec50cc84',
          'transTo': '0x5059e1e378d011313cb4ce5cd203421dfc18bddb',
          'blockNumber': 430,
          'blockTimestamp': '2023-04-05 20:52:59',
          'transFrom': '0xc852590f79705ba148d27a181317c5d4d9f4f7fc'
        },
        {
          'modifyTime': '2023-04-05 20:53:02',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:53:02',
          'transHash': '0x757e3ca5637fbf41196c487ee6a75fe9975058b75ebb894bfd70bdd3ace1325c',
          'transTo': '0x5059e1e378d011313cb4ce5cd203421dfc18bddb',
          'blockNumber': 429,
          'blockTimestamp': '2023-04-05 20:52:58',
          'transFrom': '0xc852590f79705ba148d27a181317c5d4d9f4f7fc'
        },
        {
          'modifyTime': '2023-04-05 20:53:02',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:53:02',
          'transHash': '0x03c0ee28c8a4a87a987ab483fe1435368b963b7f4e1471f1b31f597ef26c178a',
          'transTo': '0x0000000000000000000000000000000000000000',
          'blockNumber': 428,
          'blockTimestamp': '2023-04-05 20:52:58',
          'transFrom': '0xc852590f79705ba148d27a181317c5d4d9f4f7fc'
        },
        {
          'modifyTime': '2023-04-05 20:53:02',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:53:02',
          'transHash': '0xc32ffbc99bc3fc63aa8644c3e4622d39bccab9768e34db508ca4271108b4a004',
          'transTo': '0x731a52e916b608d2eb56dca45f91d051f8e02f0b',
          'blockNumber': 427,
          'blockTimestamp': '2023-04-05 20:52:57',
          'transFrom': '0x87815d09e47af44285306eeeac1b142a700c5dfc'
        },
        {
          'modifyTime': '2023-04-05 20:52:01',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:52:01',
          'transHash': '0x4fb5edd524985e6391dbf4e22806825504ab1e98eb17b6c694fb7f10b1807dc5',
          'transTo': '0x731a52e916b608d2eb56dca45f91d051f8e02f0b',
          'blockNumber': 426,
          'blockTimestamp': '2023-04-05 20:51:34',
          'transFrom': '0xcfc120e44feeaae948f076e6bc394200eefaca3d'
        },
        {
          'modifyTime': '2023-04-05 20:21:31',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:21:31',
          'transHash': '0x3a4855baadae2783eb020b06846f54b62b5eb2adfb52576463a7c7a99ceeb8ae',
          'transTo': '0xd3f33d23d7a21ebb89a27797572764764aae9e9b',
          'blockNumber': 425,
          'blockTimestamp': '2023-04-05 20:21:09',
          'transFrom': '0x8a9ed66f88d90506c2e7c3a70dd406ff437fab1b'
        },
        {
          'modifyTime': '2023-04-05 20:21:31',
          'statisticsFlag': 2,
          'createTime': '2023-04-05 20:21:31',
          'transHash': '0x94ccb9cbc1ec20f671bbaa5be9b86b895c8b6c599a3a81f52949ca84d06f5565',
          'transTo': '0x19863c750f8dee5765ab0ac292a5674a617e8ad6',
          'blockNumber': 424,
          'blockTimestamp': '2023-04-05 20:21:08',
          'transFrom': '0x8a9ed66f88d90506c2e7c3a70dd406ff437fab1b'
        }
      ]
    ],
    'extraData': null,
    'time': 1680699801026,
    'ok': true
  })

  /**
   *weGetNodeList
   */
  Mock.mock(/\/monitor\/webase\/NodeList/, {
    'msg': 'ok',
    'fail': false,
    'total': 1,
    'code': 0,
    'data': [
      [
        {
          'nodeName': '1_117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
          'agency': null,
          'city': null,
          'groupId': 1,
          'nodeIp': null,
          'description': null,
          'nodeActive': 1,
          'p2pPort': null,
          'modifyTime': '2023-04-05 21:06:02',
          'createTime': '2023-03-20 22:21:41',
          'blockNumber': 433,
          'pbftView': 779,
          'nodeId': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975'
        },
        {
          'nodeName': '1_192350db573a1f953fa07f005b018522905c140eee1ececedbbf8397b44684e617d9d49f6313ccd99273ddaf56dc4027370b708cb99d570fc867319ab13f2bdb',
          'agency': null,
          'city': null,
          'groupId': 1,
          'nodeIp': null,
          'description': null,
          'nodeActive': 1,
          'p2pPort': null,
          'modifyTime': '2023-04-05 21:06:02',
          'createTime': '2023-03-20 22:21:41',
          'blockNumber': 433,
          'pbftView': 776,
          'nodeId': '192350db573a1f953fa07f005b018522905c140eee1ececedbbf8397b44684e617d9d49f6313ccd99273ddaf56dc4027370b708cb99d570fc867319ab13f2bdb'
        },
        {
          'nodeName': '1_4822af30b02630bdb37693cb82edc4d328c0470c5fec372727666d8dd2283b7222267b99d544d907f8823d508913025fb1d456fa428a1dea4f79593d68ff264e',
          'agency': null,
          'city': null,
          'groupId': 1,
          'nodeIp': null,
          'description': null,
          'nodeActive': 1,
          'p2pPort': null,
          'modifyTime': '2023-04-05 21:06:02',
          'createTime': '2023-03-20 22:21:41',
          'blockNumber': 433,
          'pbftView': 777,
          'nodeId': '4822af30b02630bdb37693cb82edc4d328c0470c5fec372727666d8dd2283b7222267b99d544d907f8823d508913025fb1d456fa428a1dea4f79593d68ff264e'
        },
        {
          'nodeName': '1_56a03dcda5905515fded9e4f0933b952be4657bdcca1df3276b633f3059122cd0736df09d0bda6bc1d5edcffc44fa0bbd5a0e31ffa26ccd64117f94419abb620',
          'agency': null,
          'city': null,
          'groupId': 1,
          'nodeIp': null,
          'description': null,
          'nodeActive': 1,
          'p2pPort': null,
          'modifyTime': '2023-04-05 21:06:02',
          'createTime': '2023-03-20 22:21:41',
          'blockNumber': 433,
          'pbftView': 778,
          'nodeId': '56a03dcda5905515fded9e4f0933b952be4657bdcca1df3276b633f3059122cd0736df09d0bda6bc1d5edcffc44fa0bbd5a0e31ffa26ccd64117f94419abb620'
        }
      ]
    ],
    'extraData': null,
    'time': 1680699963005,
    'ok': true
  })

  /**
   *weGetTransDayList
   */
  Mock.mock(/\/monitor\/webase\/TransDaily/, {
    'msg': 'ok',
    'fail': false,
    'total': 1,
    'code': 0,
    'data': [
      [
        {
          'transCount': 23,
          'groupId': 1,
          'day': '2023-03-29'
        },
        {
          'transCount': 1,
          'groupId': 1,
          'day': '2023-03-30'
        },
        {
          'transCount': 43,
          'groupId': 1,
          'day': '2023-03-31'
        },
        {
          'transCount': 79,
          'groupId': 1,
          'day': '2023-04-01'
        },
        {
          'transCount': 7,
          'groupId': 1,
          'day': '2023-04-02'
        },
        {
          'transCount': 3,
          'groupId': 1,
          'day': '2023-04-03'
        },
        {
          'transCount': 38,
          'groupId': 1,
          'day': '2023-04-04'
        },
        {
          'transCount': 121,
          'groupId': 1,
          'day': '2023-04-05'
        }
      ]
    ],
    'extraData': null,
    'time': 1680701193614,
    'ok': true
  })

  /**
   *weGetGeneral
   */
  Mock.mock(/\/monitor\/webase\/General/, {
    'msg': 'ok',
    'fail': false,
    'total': 1,
    'code': 0,
    'data': [
      {
        'contractCount': 98,
        'groupId': 1,
        'nodeCount': 4,
        'orgCount': 0,
        'transactionCount': 449,
        'latestBlock': 448
      }
    ],
    'extraData': null,
    'time': 1680701206014,
    'ok': true
  })

  /**
   *weFrontFind
   */
  Mock.mock(/\/monitor\/webase\/FrontFind/, {
    'msg': 'ok',
    'fail': false,
    'total': 1,
    'code': 0,
    'data': [
      [
        {
          'jsonrpcPort': 8545,
          'runType': 0,
          'signVersion': 'v1.5.3',
          'agencyId': 0,
          'clientVersion': '2.9.1',
          'hostIndex': 0,
          'frontPort': 5002,
          'modifyTime': '2023-04-05 21:25:24',
          'p2pPort': 30300,
          'containerName': '',
          'supportVersion': '2.9.1',
          'chainName': '',
          'frontIp': '127.0.0.1',
          'agency': 'agency',
          'hostId': 0,
          'groupList': null,
          'agencyName': '',
          'frontId': 1,
          'channelPort': 20200,
          'createTime': '2023-03-20 22:21:39',
          'chainId': 0,
          'frontVersion': 'v1.5.4',
          'imageTag': '',
          'nodeId': '117d8e8dcabe4c1726f79acafc8dd6c0de8dff760b17e724c7870090a3378b7c3cfb435e31fe94145d667ba0b00149c6c0c229061fa8f8742eddcbc852e66975',
          'status': 1
        }
      ]
    ],
    'extraData': null,
    'time': 1680701140434,
    'ok': true
  })
  /**
   *getReportList
   */
  Mock.mock(/\/report\/listByAdmin/, {
    'fail': 'fail',
    'ok': 'ok',
    'time': 278013210960,
    'code': 0,
    'msg': 'success',
    'data|10': [
      {
        'userId|+1': 15,
        'reportId|+1': 54,
        'userName': '@cword(2,10)',
        'createdTime': '2000-07-12 06:15:03',
        'fileId': Random.image(),
        'avatar': Random.image(),
        'artworkName': '@cword(3,6)',
        'reportInfo': '@cword(10,200)'
      }
    ]
  })

  /**
   *getReportDetail
   */
  Mock.mock(/\/report\/detail/, {
    'fail': 'fail',
    'ok': 'ok',
    'time': 278013210960,
    'code': 0,
    'msg': 'success',
    'data':
      {
        'artworkId': 14,
        'artworkName': '@cword(3,8)',
        'fileId': Random.image('400x300'),
        'artworkInfo': '@cword(20,200)',
        'author|1-5': [
          {
            'userId|+1': 23,
            'username': '@cword(2,7)',
            'avatar': 'http://dummyimage.com/100x100'
          }
        ],
        'reportUserName': '@cword(2,7)',
        'reportUserId|+1': 55,
        'reportAvatar': 'http://dummyimage.com/100x100',
        'reportInfo': '@cword(200,2000)',
        'docFile|1-2': [
          {
            'name': '@cword(2,5)',
            'fileId': Random.image()
          }
        ],
        'picFile|2-5': [
          {
            'name': '@cword(2,8)',
            'fileId': Random.image()
          }
        ],
        'reportStatus': '@reportStatus'
      }
  })
  /**
   *changeReportStatus
   */
  Mock.mock(/\/report\/update/, {
    'fail': 'fail',
    'ok': 'ok',
    'time': 278013210960,
    'code': 0,
    'msg': 'success',
    'data|20': []
  })
  /**
   *getArtworkList
   */
  Mock.mock(/\/sale\/manageAdminList/, {
    'fail': 'fail',
    'ok': 'ok',
    'time': 278013210960,
    'code': 0,
    'msg': 'success',
    'data|20': [
      {
        'id+1': 83,
        'status': '@releaseStatus',
        'markedFileId': Random.image('400x300'),
        'tag|+1': 11,
        'name': '@cword(3,6)',
        'time': '1990-05-26 00:46:21',
        'author': [
          {
            'avatar': Random.image('100x100'),
            'userName': '@cword(2,7)',
            'userId|+1': 77
          }
        ],
        'hash': '0x7222bfb7c68a98a6f612b3b723c8e0b05796cb23565410b2994c3f094c4899e9'
      }
    ]
  })

  /**
   *getPubExamList
   */
  Mock.mock(/\/artwork\/pubExamList/, {
    'msg': 'in',
    'fail': 'dolore nostrud dolore officia voluptate',
    'ok': 'mollit esse quis',
    'code': 0,
    'time': 1214809976387,
    'data|20': [{
      'artworkName': '@word(3,7)',
      'artworkId|+1': 17,
      'fileId': Random.image(),
      'author|1-5': [
        {
          'avatar': Random.image('100x100'),
          'userName': '@cword(2,7)',
          'userId|+1': 77
        }
      ],
      'type': 'nulla',
      'artworkInfo': '@cword(20,400)'
    }]
  })

  /**
   *getUploadExamList
   */
  Mock.mock(/\/artwork\/uploadExamList/, {
    'msg': 'in',
    'fail': 'dolore nostrud dolore officia voluptate',
    'ok': 'mollit esse quis',
    'code': 0,
    'time': 1214809976387,
    'data|6': [{
      'artworkName': '@word(3,7)',
      'artworkId|+1': 17,
      'fileId': Random.image(),
      'author|1-5': [
        {
          'avatar': Random.image('100x100'),
          'userName': '@cword(2,7)',
          'userId|+1': 77
        }
      ],
      'documentIds|1-4': [
        {
          'markedfileId': Random.image()
        }
      ],
      'type': 'nulla',
      'artworkInfo': '@cword(20,400)'
    }]
  })

  /**
   *upLink
   */
  Mock.mock(/\/artwork\/uplink/, {
    'fail': 'fail',
    'ok': 'ok',
    'time': 278013210960,
    'code': 0,
    'msg': 'success',
    'data|20': []
  })

  /**
   *getPubReportListById
   */
  Mock.mock(/\/artwork\/getReportById/, {
    'fail': 'fail',
    'ok': 'ok',
    'time': 278013210960,
    'code': 0,
    'msg': 'success',
    'data|10': [
      {
        'userId|+1': 15,
        'reportId|+1': 54,
        'userName': '@cword(2,10)',
        'createdTime': '2000-07-12 06:15:03',
        'fileId': Random.image(),
        'avatar': Random.image(),
        'artworkName': '@cword(3,6)',
        'reportInfo': '@cword(10,200)'
      }
    ]
  })
  /**
   *getArtworkDetail
   */
  Mock.mock(/\/artwork\/detail/,
    {
      'msg': 'ok',
      'fail': false,
      'code': 0,
      'data': [
        {
          'author|1-5': [
            {
              'avatar': Random.image('100x100'),
              'userName': '@cword(2,7)',
              'userId|+1': 77
            }
          ],
          'uploadfileId': '3',
          'markedfileId': null,
          'type': 1,
          'remaining': 1,
          'createdTime': '2020-2-20',
          'isFavorites': true,
          'price': 10,
          'name': 'cocococococococococococococococococo',
          'releaseStatus': 1,
          'id': 2,
          'hash': '77abad6936e340e4987452e4d35d60b9',
          'fileId': Random.image(),
          'info': '这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品'
        }
      ],
      'time': 1680077261668,
      'ok': true
    }
  )

  /**
   *delArtwork
   */
  Mock.mock(/\/artwork\/del/,
    {
      'msg': 'ok',
      'fail': false,
      'code': 0,
      'data': [
        {
          'author': [
            {
              'contribution': 100,
              'ownPriceMin': 30,
              'avatar': null,
              'userId': 1,
              'username': 'lry'
            }
          ],
          'uploadfileId': '3',
          'markedfileId': null,
          'type': 1,
          'remaining': 1,
          'createdTtime': null,
          'isFavorites': true,
          'price': 10,
          'name': 'coco',
          'releaseStatus': 1,
          'id': 2,
          'hash': null,
          'fileId': '1',
          'info': '这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品这是一个好的藏品'
        }
      ],
      'time': 1680077261668,
      'ok': true
    }
  )

  /**
   *getRooms
   */
  Mock.mock(/\/showRoom\/list/, {
    'code': 0,
    'msg': 'success',
    'data|20': [
      {
        'showroomId|+1': 13,
        'promoterId|+2': 28,
        'promoterName': '@cname(3,4)',
        'jointa': '@cname',
        'jointb': '@cname',
        'jointc': '@cname',
        'jointd': '@cname',
        'name': '@cword(3,7)',
        'pattern': 1,
        'info|1-6': '@csentence',
        'workSum|3-9': 1,
        'heat|0-900': 1,
        'view|0-9000': 1
      }
    ]
  })

  /**
   *getRoomWorks
   */
  Mock.mock(/\/showWork\/list/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })
  /**
   *setArtworkStatus
   */
  Mock.mock(/\/artwork\/status/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })

  /**
   *lockArtwork
   */
  Mock.mock(/\/artwork\/lock/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })

  /**
   *getExamList
   */
  Mock.mock(/\/artwork\/examlist/, {
    'code': 0,
    'msg': 'success',
    'data|20': [
      {
        'artworkName': '@sentence(5,7)',
        'artworkId|+1': 97,
        'userName': '@cname',
        'userId|+1': 90,
        'isPublicized|1': true,
        'isReturned|1': true,
        'isOnChain|1': true
      }
    ]
  })

  /**
   *getExamInfo
   */
  Mock.mock(/\/artwork\/examinfo/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })

  /**
   *lockRoom
   */
  Mock.mock(/\/showroom\/lock/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })

  /**
   *Login
   */
  Mock.mock(/\/user\/loginPassword/, {
    'code': 0,
    'msg': 'success',
    'data|20': [],
    "fail": "cillum sed",
    "ok": "velit",
    "time": 645443001201,
    "data": {
      "accessToken": "VIECbg^)m)&SW"
    }
  })

  /**
   *Logout
   */
  Mock.mock(/\/user\/logout/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })

  /**
   *UserInfo
   */
  Mock.mock(/\/user\/getInfo/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })

  /**
   *getUserList
   */
  Mock.mock(/\/user\/listByKeyword/, {
    'code': 0,
    'msg': 'success',
    'data|20': [
      {
        'publicAdd': '@word(5,10)',
        'name': '@name',
        'mobile': mobile,
        'reputation': yibai,
        'id|+1': 1,
        'status': 1
      }
    ]
  })

  /**
   *frozenUser
   */
  Mock.mock(/\/user\/frozen/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })
  /**
   *changeRight
   */
  Mock.mock(/\/right\/changeright/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })

  /**
   *getRightList
   */
  Mock.mock(/\/rightProtect\/list/, {
    'fail': 'fail',
    'ok': 'ok',
    'time': 278013210960,
    'code': 0,
    'msg': 'success',
    'data|20': [
      {
        'id|+1': 58,
        'createdTime': '1993-08-17 09:57:35',
        'updatedTime': '1971-04-07 02:43:12',
        'name': '@cword(2,9)',
        'artworkId|+1': 91,
        'artworkName': '@cword(4,9)',
        'isTorted': '@rightStatus'
      }
    ]
  })
  /**
   *getRightInfo
   */
  Mock.mock(/\/rightProtect\/detail/, {
    'fail': 'fail',
    'ok': 'ok',
    'time': 278013210960,
    'code': 0,
    'msg': 'success',
    'data':
      {
        'artworkName': '一只玫瑰',
        'updatedTime': '2023-03-02 01:13:29',
        'artworkId': 1,
        'isTorted': 0,
        'safeRecordId': 1,
        'createdTime': '2023-03-01 21:13:16',
        'userName': 'zsy',
        'evidences|1-6': [
          {
            'evidenceId|+1': 1,
            'eviNodeStatus': '@rightStatus',
            'batch|+1': 1,
            'time': '2023-03-08 01:15:05',
            'text': '为什么要侵权我的作品！！',
            'fileId': 'http://dummyimage.com/100x100,http://dummyimage.com/100x100,http://dummyimage.com/100x100'
          }
        ],
        'userId': 1,
        'fileId': '1'
      }
  })

  /**
   *setWatermark
   */
  Mock.mock(/\/artwork\/extractMark/, {
    'code': 0,
    'msg': 'success',
    'data': {
      'artworkHash':'87378876ftfdgyiu9u83t3',
      'extractFileId':'http://dummyimage.com/100x100'
    }
  })

  /**
   *getCreateTemplate
   */
  Mock.mock(/\/template\/create/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })

  /**
   *getEditTemplate
   */
  Mock.mock(/\/template\/edit/, {
    'code': 0,
    'msg': 'success',
    'data|20': []
  })
}
