public class Player
{
    public int Damage = 10;
    public int HP{ get; private set; } = 100;

    // 플레이어의 HP를 볼 수 있는 UI
    public Text HpUI;

    // 플레이어의 애니메이터
    // TakenDamage 라는 Trigger 타입의 파라미터 있음.
    private Animator _animator;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            PhotonView photonView = PhotonView.Get(this);
            photonView.RPC("Attack", RpcTarget.All, "jup", "and jup!");
        }
    }

    [PunRPC]
    public void Attack()
    {
        Debug.Log(string.Format("Attack Damage : {0}", Damage));
    }

    [PunRPC]
    public void TakeDamage(int damage)
    {
        Debug.Log(string.Format("HP : {0}", HP));
    }
}