T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    travel = str(input())
    
    hasN = 'N' in travel
    hasS = 'S' in travel
    hasE = 'E' in travel
    hasW = 'W' in travel
    
    possible = True
    if hasN != hasS:
        possible = False
    if hasE != hasW:
        possible = False

    print('Yes' if possible else 'No')
